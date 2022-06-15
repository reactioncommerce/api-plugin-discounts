import calculationTypes from "../calculationTypes/index.js";
import { getCalculationTypeMap } from "./getCalculationTypeMap.js";

const context = {
  getFunctionsOfType: () => calculationTypes
};

test("getCalculationTypeMap create a map of functions from the array", () => {
  const calculationTypeMap = getCalculationTypeMap(context);
  const { fixed, percentage } = calculationTypeMap;
  const fixedDiscount = fixed(4, 2);
  expect(fixedDiscount).toEqual(2);
  const percentageDiscount = percentage(100, 8);
  expect(percentageDiscount).toEqual(92);
});
