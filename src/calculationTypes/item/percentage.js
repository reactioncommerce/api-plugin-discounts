/**
 * @summary recalculate the subtotal based on percentage off
 * @param {Number} subtotal - The undiscounted subtotal
 * @param {Number} discountValue - What percentage to discount
 * @returns {number} - The discounted subtotal
 */
export default function percentage(subtotal, discountValue) {
  const discountedSubtotal = subtotal - (subtotal * (discountValue / 100));
  return discountedSubtotal;
}
