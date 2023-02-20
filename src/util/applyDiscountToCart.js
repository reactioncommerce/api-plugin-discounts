import applyProductFilters from "./applyProductFilters.js";
import { getCalculationTypeMap } from "./getCalculationTypeMap.js";


export default async function applyDiscountToCart(context, { cart, discount }) {
  if (discount.discountApplicationType === "item") {
    const itemsToApply = applyProductFilters(context, cart.items, discount.productFilters);
    itemsToApply.forEach((item) => {
      if (!item.discount) {
        item.discounts = [];
      }
      discount.dateApplied = Date.now();
      item.discounts.push(discount);
      const calculationMap = getCalculationTypeMap(context);
      item.subtotal.amount = calculationMap[discount.discountCalculationType](item.subtotal.amount, discount.discountValue);
    });
  }
  return cart;
}
