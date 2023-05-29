const searchFilter = (productsList, appliedFiltersVal) => {
  return appliedFiltersVal.search.length > 0
    ? productsList.filter(({ name }) =>
        name.toLowerCase().includes(appliedFiltersVal.search.toLowerCase())
      )
    : productsList;
};

const priceFilter = (productsList, appliedFiltersVal) => {
  return productsList.filter(
    ({ price }) => price <= +appliedFiltersVal.price * 1000
  );
};

const categoryFilter = (productsList, appliedFiltersVal) => {
  const { category: categories } = appliedFiltersVal;

  return categories.length > 0
    ? productsList.filter(({ category: productCategory }) =>
        categories.some((filterCategory) => filterCategory === productCategory)
      )
    : productsList;
};

const ratingsFilter = (productsList, appliedFiltersVal) => {
  return appliedFiltersVal.ratingsFilter.length > 0
    ? productsList.filter(
        ({ stars }) => stars >= +appliedFiltersVal.ratingsFilter
      )
    : productsList;
};

const sortFilter = (productsList, appliedFiltersVal) => {
  return !appliedFiltersVal.sort.length
    ? productsList
    : appliedFiltersVal.sort === "increasing"
    ? [...productsList].sort((a, b) => a.price - b.price)
    : [...productsList].sort((a, b) => b.price - a.price);
};

const filterFunctions = [
  searchFilter,
  priceFilter,
  categoryFilter,
  ratingsFilter,
  sortFilter,
];

export const getFilteredProducts = (productsList, appliedFiltersVal) =>
  filterFunctions.reduce(
    (acc, currFunction) => currFunction(acc, appliedFiltersVal),
    productsList
  );
