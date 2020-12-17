import React from "react";

function JobListingHeader({ filters, removeFilter, clearFilters }) {
  return (
    <header className="job__listing__header">
      <div className="selected__filters__wrapper">
        {filters &&
          filters.map((filter, i) => (
            <div key={i} className="selected__job__filter__badge tt-c">
              {filter}
              <button
                className="remove__filter__btn"
                data-filter={filter}
                onClick={() => removeFilter(filter)}
              >
                <img src="./images/icon-remove.svg" alt="" />
              </button>
            </div>
          ))}
        {filters.length > 0 && (
          <button
            className="clear__selected_filter text__muted"
            onClick={clearFilters}
            aria-label="clear filters"
          >
            clear
          </button>
        )}
      </div>
    </header>
  );
}

export default JobListingHeader;
