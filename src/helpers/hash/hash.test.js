import { hash } from "./hash";

describe("hash tests", () => {
  test("hash some values", () => {
    expect(hash("abc", "def", "ghi")).toBe("abcdefghi");
  });

  test("hash one value", () => {
    expect(hash("abc")).toBe("abc");
  });

  test("empty string", () => {
    expect(hash("")).toBe("");
  });

  test("no values", () => {
    expect(hash()).toBe(null);
  });

  test("hash numbers", () => {
    expect(hash(1, 2, 3)).toBe("123");
  })
});