import { data } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
  const jobsWrapper = document.querySelector(".jobs__wrapper");
  let filters = new Set();
  function setJob({
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  }) {
    const jobWrapperDiv = document.createElement("div");
    jobWrapperDiv.classList.add("job__wrapper");
    featured ? jobWrapperDiv.classList.add("featured") : {};
    jobWrapperDiv.innerHTML = removeComman(`
        <div class="job__info__wrapper">
              <img class="job__image"src="${logo}" alt="" class="logo" />
              <div class="job__info">
                <div class="job__info__header">
                  <h2 class="company__name tt-c">${company}</h2>
                  ${isNew ? '<span class="new__badge tt-u">new!</span>' : ""}
                  ${
                    featured
                      ? '<span class="featured__badge tt-u">featured</span>'
                      : ""
                  }
                </div>
                <h3 class="job__position tt-c"><a href="#">${position}</a></h3>
                <div class="job__info__footer text__muted">
                  <span class="posted__at">${postedAt}</span> <span>.</span>
                  <span class="contract__type  tt-c">${contract}</span> <span>.</span>
                  <span class="job__location">${location}</span>
                </div>
              </div>
            </div>
            <div class="job__languages__tools__wrapper">
            <span class="job__filter__badge tt-c">${role}</span>
            <span class="job__filter__badge tt-c">${level}</span>
            ${languages.map(
              (lang) => `<span class="job__filter__badge tt-c">${lang}</span>`
            )}
            ${tools.map(
              (tool) => `<span class="job__filter__badge tt-c">${tool}</span>`
            )}
            </div>
          </div>
    `);
    return jobWrapperDiv;
  }

  function displayJops(data) {
    let fragment = new DocumentFragment();
    jobsWrapper.innerHTML = ``;
    data.map((job) => {
      const jobDiv = setJob(job);
      fragment.appendChild(jobDiv);
    });
    jobsWrapper.appendChild(fragment);
    setHandleFilter();
  }

  function displayFilters(filters) {
    const jobListingHeader = document.querySelector(".job__listing__header");
    const selectedFiltersWrapper = document.createElement("div");
    const clearSelectedFilterBtn = document.createElement("div");
    clearSelectedFilterBtn.textContent = "clear";
    clearSelectedFilterBtn.classList.add(
      "clear__selected_filter",
      "text__muted"
    );
    selectedFiltersWrapper.className = "selected__filters__wrapper";
    selectedFiltersWrapper.innerHTML = removeComman(`
        ${[...filters].map(
          (filter) =>
            `<div class="selected__job__filter__badge tt-c">
          ${filter}
          <button class="remove__filter__btn" data-filter="${filter}">
          <img src="./images/icon-remove.svg" alt="" /></button>
          </div>`
        )}
        `);
    if (filters.size > 0) {
      selectedFiltersWrapper.appendChild(clearSelectedFilterBtn);
    }
    jobListingHeader.appendChild(selectedFiltersWrapper);
    const selectedJobFilterBadge = document.querySelectorAll(
      ".remove__filter__btn"
    );
    selectedJobFilterBadge.forEach((selected) =>
      selected.addEventListener("click", (e) => {
        removeFilter(selected.dataset.filter);
      })
    );
    clearSelectedFilterBtn.addEventListener("click", () => {
      filters.clear();
      updateUI(data, filters);
    });
  }

  function setHandleFilter() {
    const jobLanguagesToolsWrapper = document.querySelectorAll(
      ".job__languages__tools__wrapper"
    );
    jobLanguagesToolsWrapper.forEach((job) =>
      job.addEventListener("click", handleAddFilter)
    );
  }
  function filterJops(data, filters) {
    function filtersHasAny(...items) {
      for (const item of items) {
        if (filters.has(item)) return true;
      }
    }
    // if there is a filters return filtered data otherwise return all data
    return filters.size > 0
      ? data.filter((job) =>
          filtersHasAny(job.role, job.level, ...job.tools, ...job.languages)
        )
      : data;
  }
  function handleAddFilter(e) {
    if (!e.target.classList.contains("job__filter__badge")) return;
    const filter = e.target.textContent;
    // don't update ui if filter is allready exict
    if (filters.has(filter)) return;
    filters.add(filter);
    updateUI(filterJops(data, filters), filters);
  }

  function removeFilter(filter) {
    filters = new Set([...filters].filter((f) => f !== filter));
    updateUI(filterJops(data, filters), filters);
  }

  function updateUI(data, filters) {
    displayJops(data);
    displayFilters(filters);
  }

  updateUI(data, filters);
});

function removeComman(str) {
  return str.replace(/,/g, "");
}
