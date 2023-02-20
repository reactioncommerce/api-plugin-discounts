export function getCalculationTypeMap(context) {
  const calculationTypes = context.getFunctionsOfType("discountCalculationTypes");
  const calculationMap = {};
  calculationTypes.forEach((calculationType) => {
    calculationMap[calculationType.name] = calculationType;
  });
  return calculationMap;
}
