"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";

function readLangCookie(): Locale {
  const m = document.cookie.match(/(?:^|; )lang=(fr|en)/);
  return m?.[1] === "fr" ? "fr" : "en";
}

/** Client-only locale from the `lang` cookie (SSR defaults to `en`). */
export function useClientLocale(): Locale {
  return useSyncExternalStore(
    () => () => {},
    readLangCookie,
    () => "en"
  );
}

export function setLangCookie(lang: Locale) {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}
