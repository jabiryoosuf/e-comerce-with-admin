import React from "react";

const ShopFiltering = ({
  clearFilter,
  setFiltersState,
  filtersState,
  filters,
}) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3>Filters</h3>

      {/* category  */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        {filters.category.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              id="category"
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState({ ...filtersState, category: e.target.value })
              }
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>

      {/* color  */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Color</h4>
        <hr />
        {filters.color.map((color) => (
          <label key={color}>
            <input
              type="radio"
              name="color"
              id="color"
              value={color}
              checked={filtersState.color === color}
              onChange={(e) =>
                setFiltersState({ ...filtersState, color: e.target.value })
              }
            />
            <span className="ml-1">{color}</span>
          </label>
        ))}
      </div>

      {/* price range  */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Color</h4>
        <hr />
        {filters.priceRanges.map((range) => (
          <label key={range.label}>
            <input
              type="radio"
              name="priceRanges"
              id="priceRanges"
              value={`${range.min}-${range.max}`}
              checked={filtersState.priceRanges === `${range.min}-${range.max}`}
              onChange={(e) =>
                setFiltersState({
                  ...filtersState,
                  priceRanges: e.target.value,
                })
              }
            />
            <span className="ml-1">{range.label}</span>
          </label>
        ))}
      </div>
      <button
        onClick={clearFilter}
        className="bg-primary py-1 px-4 text-white rounded"
      >
        Clear Filter
      </button>
    </div>
  );
};

export default ShopFiltering;
