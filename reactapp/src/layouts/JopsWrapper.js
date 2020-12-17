import React from "react";
import JobWrapper from "../Components/JobWrapper";
function JopsWrapper({ filtaredData, addFilter }) {
  return (
    <main className="job__listing__main">
      <div className="container">
        <div className="jobs__wrapper">
          {filtaredData &&
            filtaredData.map((job) => (
              <JobWrapper key={job.id} job={job} addFilter={addFilter} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default JopsWrapper;
