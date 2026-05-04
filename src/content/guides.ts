import { promises as fs } from "node:fs";
import path from "node:path";

export type GuideType = "country" | "city" | "region";

type Frontmatter = Record<string, string>;

export type Guide = {
  type: GuideType;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  affiliateLabel: string;
  affiliateUrl: string;
  body: string;
  links: {
    regionSlug?: string;
    countrySlug?: string;
    citySlug?: string;
  };
};

const CONTENT_ROOT = path.join(process.cwd(), "content");
const TYPE_DIRS: Record<GuideType, string> = {
  country: "countries",
  city: "cities",
  region: "regions"
};

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid markdown frontmatter block");
  }

  const [, block, body] = match;
  const frontmatter: Frontmatter = {};

  for (const line of block.split("\n")) {
    const idx = line.indexOf(":");
    if (idx < 1) {
      continue;
    }
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    frontmatter[key] = value;
  }

  return { frontmatter, body: body.trim() };
}

function assertGuideType(value: string): GuideType {
  if (value === "country" || value === "city" || value === "region") {
    return value;
  }
  throw new Error(`Unsupported guide type: ${value}`);
}

function normalizeGuide(frontmatter: Frontmatter, body: string): Guide {
  const type = assertGuideType(frontmatter.type ?? "");
  const slug = frontmatter.slug;
  const title = frontmatter.title;
  const seoTitle = frontmatter.seoTitle;
  const seoDescription = frontmatter.seoDescription;
  const affiliateLabel = frontmatter.affiliateLabel;
  const affiliateUrl = frontmatter.affiliateUrl;

  if (!slug || !title || !seoTitle || !seoDescription || !affiliateLabel || !affiliateUrl) {
    throw new Error(`Guide frontmatter missing required fields for slug ${slug ?? "unknown"}`);
  }

  return {
    type,
    slug,
    title,
    seoTitle,
    seoDescription,
    affiliateLabel,
    affiliateUrl,
    body,
    links: {
      regionSlug: frontmatter.regionSlug,
      countrySlug: frontmatter.countrySlug,
      citySlug: frontmatter.citySlug
    }
  };
}

function markdownToHtml(markdown: string): string {
  return markdown
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2>${line.slice(3).trim()}</h2>`;
      }
      if (!line.trim()) {
        return "";
      }
      return `<p>${line.trim()}</p>`;
    })
    .join("\n");
}

export async function getAllGuides(): Promise<Guide[]> {
  const guides: Guide[] = [];

  for (const [type, directory] of Object.entries(TYPE_DIRS) as [GuideType, string][]) {
    const dirPath = path.join(CONTENT_ROOT, directory);
    const files = await fs.readdir(dirPath);

    for (const fileName of files.filter((file) => file.endsWith(".md"))) {
      const content = await fs.readFile(path.join(dirPath, fileName), "utf8");
      const { frontmatter, body } = parseFrontmatter(content);
      const guide = normalizeGuide(frontmatter, body);
      if (guide.type !== type) {
        throw new Error(`Guide ${guide.slug} stored in wrong directory`);
      }
      guides.push(guide);
    }
  }

  return guides.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getGuideByTypeAndSlug(type: GuideType, slug: string): Promise<Guide | null> {
  const all = await getAllGuides();
  return all.find((guide) => guide.type === type && guide.slug === slug) ?? null;
}

export async function getGuideParams() {
  const all = await getAllGuides();
  return all.map((guide) => ({ type: guide.type, slug: guide.slug }));
}

export function renderGuideBodyHtml(guide: Guide): string {
  return markdownToHtml(guide.body);
}
