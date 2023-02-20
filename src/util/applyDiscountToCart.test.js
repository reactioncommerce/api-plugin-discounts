import { CartDiscount } from "../simpleSchemas.js";
import calculationTypes from "../calculationTypes/index.js";
import applyDiscountToCart from "./applyDiscountToCart.js";
import { getCalculationTypeMap } from "./getCalculationTypeMap.js";

const context = {
  getFunctionsOfType: () => calculationTypes
};

const now = Date.now();

const itemDiscount = {
  _id: "myItemDiscount",
  active: true,
  name: "40% off Levi's Swank Jeans",
  description: "40% off Levi's Swank Jeans",
  cartDescription: [{
    language: "EN",
    content: "40% off Levi's Swank Jeans"
  }],
  discountCalculationType: "percentage",
  discountApplicationType: "item",
  discountValue: 40,
  reportAsTaxable: true,
  productFilters: [{
    attribute: "productSlug",
    operator: "eq",
    value: "stupid-product"
  }]
};

const cart = {
  _id: "bo9diWmRnJmGDQDe8",
  accountId: null,
  anonymousAccessToken: "tFkgJCFqztXFekNll7iMN9k8bW2bQKeOndskRLmQ+fY=",
  currencyCode: "USD",
  createdAt: now,
  items: [
    {
      _id: "fxfTQY6EWsd5TBrN8",
      attributes: [
        {
          label: "Size",
          value: "Red"
        }
      ],
      compareAtPrice: {
        amount: 22,
        currencyCode: "USD"
      },
      isTaxable: true,
      metafields: null,
      optionTitle: "Red",
      parcel: null,
      price: {
        amount: 12,
        currencyCode: "USD"
      },
      priceWhenAdded: {
        amount: 12,
        currencyCode: "USD"
      },
      productId: "ESoEGHi6ts8oZCSvQ",
      productSlug: "stupid-product",
      productVendor: "Products Inc.",
      productType: "product-simple",
      productTagIds: null,
      quantity: 3,
      shopId: "9MYfksHT8wMs3xnkq",
      subtotal: {
        amount: 36,
        currencyCode: "USD"
      },
      taxCode: null,
      title: "Stupid Product",
      updatedAt: now,
      variantId: "onSRjBSMqZAwyQhK4",
      variantTitle: "Red Thing",
      addedAt: now,
      createdAt: now
    }
  ],
  shopId: "9MYfksHT8wMs3xnkq",
  updatedAt: now,
  workflow: {
    status: "new"
  },
  referenceId: "xniFabNMdF48tcqdp",
  shipping: [
    {
      _id: "8A89v3qzbMn62weay",
      itemIds: [
        "fxfTQY6EWsd5TBrN8"
      ],
      shopId: "9MYfksHT8wMs3xnkq",
      type: "shipping"
    }
  ],
  discount: 0,
  surcharges: [

  ],
  taxSummary: null,
  email: "fake@example.org"
};

test("our test discount is a valid discount type", () => {
  try {
    CartDiscount.validate(itemDiscount);
  } catch (error) {
    expect(error).toBeUndefined();
  }
});

test("item discount is properly applied to cart", async () => {
  const results = await applyDiscountToCart(context, { cart, discount: itemDiscount });
  console.log("results", results);
  expect(results).toBeDefined();
  console.log("subtotal", results.items[0].subtotal);
  expect(results.items[0].discounts.length).toEqual(1);
  expect(results.items[0].subtotal.amount).toEqual(12);
  console.log("cart", cart);
});
