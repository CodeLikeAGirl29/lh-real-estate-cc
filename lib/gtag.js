export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
