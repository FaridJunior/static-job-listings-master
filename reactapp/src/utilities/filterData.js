export function filterData(data, filters) {
  function filtersHasAny(...features) {
    for (const feature of features) {
      if (filters.includes(feature)) return true;
    }
  }
  // if there is a filters return filtered data otherwise return all data
  return filters.length > 0
    ? data.filter((job) =>
        filtersHasAny(job.role, job.level, ...job.tools, ...job.languages)
      )
    : data;
}
