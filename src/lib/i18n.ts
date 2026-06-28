import { cookies } from "next/headers";

export type Locale = "en" | "fr";

export const LOCALES: Locale[] = ["en", "fr"];
export const DEFAULT_LOCALE: Locale = "en";
export const LANG_COOKIE = "lang";

/**
 * Reads the active locale from the `lang` cookie (server components only).
 * Defaults to English when the cookie is missing or unrecognised.
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get(LANG_COOKIE)?.value === "fr" ? "fr" : "en";
}

/** Selects the locale-specific branch of a per-page copy object. */
export function pick<T>(locale: Locale, copy: Record<Locale, T>): T {
  return copy[locale];
}
