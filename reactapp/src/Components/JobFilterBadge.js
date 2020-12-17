import React from "react";

function JobFilterBadge({ filter, addFilter }) {
  return (
    <span className="job__filter__badge tt-c" onClick={() => addFilter(filter)}>
      {filter}
    </span>
  );
}

export default JobFilterBadge;
