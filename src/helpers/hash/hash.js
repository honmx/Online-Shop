export const hash = (...items) => {
  if (items.length === 0) return null;
  return items.join("");
}