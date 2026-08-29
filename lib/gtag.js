// Thin wrapper around the global gtag() function that @next/third-parties'
// <GoogleAnalytics> installs on window. Safe to call even when GA hasn't
// loaded yet (dev, ad blockers, missing NEXT_PUBLIC_GA_ID) — it just no-ops.

export function event({ action, category, label, value }) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
