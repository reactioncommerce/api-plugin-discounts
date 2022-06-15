import applyProductFilters from "./applyProductFilters.js";

const items = [
  {
    brand: "Nike",
    price: 154.00,
    productSlug: "my-nike-jeans"
  },
  {
    productSlug: "some-other-product",
    brand: "Esprit",
    price: 154.00
  }
];

const filters = [{
  attribute: "brand",
  operator: "eq",
  value: "Nike"
}];

test("applyProductFilter returns filtered items", () => {
  const filteredItems = applyProductFilters({}, items, filters);
  expect(filteredItems.length).toEqual(1);
  expect(filteredItems[0].brand).toEqual("Nike");
});
