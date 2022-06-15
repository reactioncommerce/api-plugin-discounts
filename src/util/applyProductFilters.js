const operators = {
  eq: (param1, param2) => param1 === param2
};


export default function applyProductFilters(context, items, filters) {
  const filteredItems = items.filter((item) => {
    let fitsFilter = false;
    filters.forEach((filter) => {
      if (operators[filter.operator](item[filter.attribute], filter.value)) {
        fitsFilter = true;
      }
    });
    if (fitsFilter) return item;
  });
  return filteredItems;
}
