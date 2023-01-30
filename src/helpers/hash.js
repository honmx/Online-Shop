export const hash = (...items) => {
  return items.reduce((acc, cur) => {
    return cur ? acc + cur : acc;
  }, "");
}