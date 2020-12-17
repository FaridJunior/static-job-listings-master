import React, { useState, useEffect } from "react";
import "./style.css";
import { fetchData } from "./api";
import JopsWrapper from "./layouts/JopsWrapper";
import JobListingHeader from "./layouts/JobListingHeader";
import { filterData } from "./utilities/filterData";

function App() {
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([]);
  const [filtaredData, setFiltaredData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    const currentfilterData = filterData(data, filters);
    setFiltaredData(currentfilterData);
  }, [filters, data]);

  function addFilter(filter) {
    const newFilters = new Set([...filters, filter]);
    setFilters([...newFilters]);
  }

  function removeFilter(filter) {
    const newFilters = filters.filter((f) => f !== filter);
    setFilters(newFilters);
  }

  function clearFilters() {
    setFilters([]);
  }

  return (
    <div className="App">
      <JobListingHeader
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      <JopsWrapper filtaredData={filtaredData} addFilter={addFilter} />
    </div>
  );
}

export default App;
