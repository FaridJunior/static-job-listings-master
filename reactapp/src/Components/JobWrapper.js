import React from "react";
import JobFilterBadge from "./JobFilterBadge";

function JobWrapper({ job, addFilter }) {
  const {
    company,
    isNew,
    featured,
    position,
    logo,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  } = job;
  return (
    <div className={featured ? "job__wrapper featured" : "job__wrapper"}>
      <div className="job__info__wrapper">
        <img className="job__image" src={logo} alt="" />
        <div className="job__info">
          <div className="job__info__header">
            <h2 className="company__name tt-c">{company}</h2>
            {isNew && <span className="new__badge tt-u">new!</span>}
            {featured && <span className="featured__badge tt-u">featured</span>}
          </div>
          <h3 className="job__position tt-c">
            <a href={position.replace(/\s/g, "-")}>{position}</a>
          </h3>
          <div className="job__info__footer text__muted">
            <span className="posted__at">{postedAt}</span> <span>.</span>
            <span className="contract__type  tt-c">{contract}</span>{" "}
            <span>.</span>
            <span className="job__location">{location}</span>
          </div>
        </div>
      </div>
      <div className="job__languages__tools__wrapper">
        <JobFilterBadge addFilter={addFilter} filter={role} />
        <JobFilterBadge addFilter={addFilter} filter={level} />
        {languages &&
          languages.map((lang, i) => (
            <JobFilterBadge key={i} addFilter={addFilter} filter={lang} />
          ))}
        {tools &&
          tools.map((tool, i) => (
            <JobFilterBadge key={i} addFilter={addFilter} filter={tool} />
          ))}
      </div>
    </div>
  );
}

export default JobWrapper;
