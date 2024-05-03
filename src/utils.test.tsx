import { getFilteredData } from "./utils";

const mockData = [
  { name: "Item 1", price: 0 },
  { name: "Item 2", price: 0 },
  { name: "Item 3", price: 0 },
  { name: "Item 4", price: 0 },
  { name: "Item 5", price: 0 },
  { name: "Item 6", price: 0 },
  { name: "Item 6", price: 0 },
];

describe("Testing filter function", () => {
  it("Test finding one ", () => {
    const filterOne = getFilteredData("1", mockData);

    expect(filterOne).toHaveLength(1);
    expect(filterOne).toEqual([{ name: "Item 1", price: 0 }]);
  });
  it("Test finding two ", () => {
    const filterTwo = getFilteredData("6", mockData);

    expect(filterTwo).toHaveLength(2);
    expect(filterTwo).toEqual([
      { name: "Item 6", price: 0 },
      { name: "Item 6", price: 0 },
    ]);
  });
  it("Test invalid one ", () => {
    const invalidFilter = getFilteredData("A", mockData);

    expect(invalidFilter).toEqual([]);
  });
  it("Test undefined string ", () => {
    const invalidFilter = getFilteredData("", mockData);

    expect(invalidFilter).toEqual([]);
  });
});
