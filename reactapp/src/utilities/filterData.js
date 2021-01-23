export function filterData(data, filters) {
  function jopHasFilters(...jopFilters) {
    let flag = true;
    filters.forEach((filter) => {
      console.log(filter);
      console.log(jopFilters);
      if (!jopFilters.includes(filter)) flag = false;
    });
    return flag;
  }
  // if there is a filters return filtered data otherwise return all data
  return filters.length > 0
    ? data.filter((job) => jopHasFilters(job.role, job.level, ...job.tools, ...job.languages))
    : data;
}
