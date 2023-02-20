export default function fixed(subtotal, discountValue) {
  const discountedSubtotal = subtotal - discountValue;
  return discountedSubtotal;
}
