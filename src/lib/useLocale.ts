"use client";

import { useSyncExternalStore } from "react";
// Type-only import: i18n.ts uses next/headers and must stay out of client bundles.
import type { Locale } from "./i18n";

const LANG_EVENT = "mgx:lang";

function readCookieLocale(): Locale {
  const m = document.cookie.match(/(?:^|; )lang=(fr|en)/);
  return m?.[1] === "fr" ? "fr" : "en";
}

function subscribe(onChange: () => void) {
  window.addEventListener(LANG_EVENT, onChange);
  return () => window.removeEventListener(LANG_EVENT, onChange);
}

/**
 * Writes the `lang` cookie and notifies every mounted `useLocale()`
 * subscriber so client pages re-render immediately (server components
 * still need `router.refresh()`).
 */
export function setLocaleCookie(lang: Locale) {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
  window.dispatchEvent(new Event(LANG_EVENT));
}

/**
 * Client-side locale, kept in sync with the `lang` cookie. Renders the
 * default locale on the server / during hydration, then re-renders with
 * the cookie value and on every language switch.
 */
export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, readCookieLocale, () => "en");
}
