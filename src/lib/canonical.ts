import { Metadata } from "next";

export function getCanonicalUrl(path: string): string {
  return `https://new.reabilitar-em-casa.com${path}`;
}

export function createMetadata(path: string, overrides?: Partial<Metadata>): Metadata {
  const canonicalUrl = getCanonicalUrl(path);

  return {
    ...overrides,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
