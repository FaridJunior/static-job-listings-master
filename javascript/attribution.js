// it is attribution component seems to be not arranged I know but I was try some thing like styled component 😀
document.addEventListener("DOMContentLoaded", () => {
  const attribution = document.createElement("div");
  attribution.classList.add("attribution");
  // styles
  const attributionStyle =
    "position:absolute;bottom:20%;width:200px;left:-200px;transition:transform 300ms ease-in-out;";
  const attributionContainerStyle =
    "position:relative;display:flex;flex-direction:column;justify-content:space-around;padding:1rem;align-items:center;font-size:0.8rem;text-align:center;background:#222832;color:#e9e9e9;border-radius:0px4px4px0px;";
  const attributionMentor = "margin-bottom: 1rem;";
  const attributionP = "margin:0px0px4px0px;";
  const attributionA = "color:hsl(228,45%,80%);text-decoration:none;";
  const toggleAttributionBtn = removeSpace(`position: absolute;
  cursor: pointer;
  border: none;
  background: inherit;
  bottom: 0px;
  right: -26px;
  padding: 0.4rem 0.45rem;
  display: flex;
  justify-content: center;
  align-items:center;border-radius:0px6px6px0px;`);
  const SvgStyle = removeSpace(``);

  attribution.style = attributionStyle;
  attribution.innerHTML = `
    <div style=${attributionContainerStyle}>
      <div class="mentor" style=${attributionMentor}>
        <p style=${attributionP}>Challenge by </p>
        <a style=${attributionA} href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >.
      </div>
      <div class="challenger">
        <p style=${attributionP}>Coded by</p>
        <a style=${attributionA} href="https://twitter.com/mfarid_se">Mohamed Farid</a>.
      </div>
      <button id="toggle-attribution" style=${toggleAttributionBtn}>
        <svg width="16" height="32" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6.98764 8.36941C7.28616 8.73681 7.28616 9.26319 6.98764 9.63059L1 17" stroke="white" stroke-width="2"/>
        </svg>
      </button>
    </div>
    `;
  function setAttribution() {
    document.body.appendChild(attribution);
    const toggleAttributionBtn = document.querySelector("#toggle-attribution");
    const attributionSvg = attribution.querySelector("svg");
    attributionSvg.style.transition = "all 300ms ease-in-out";
    toggleAttributionBtn.addEventListener("click", () => {
      if (attribution.classList.contains("opened")) {
        attribution.classList.remove("opened");
        attribution.style.transform = "";
        attributionSvg.style.transform = "";
      } else {
        attribution.classList.add("opened");
        attribution.style.transform = " translate(200px)";
        attributionSvg.style.transform = "rotate(180deg)";
      }
    });
  }
  setTimeout(setAttribution, 0);

  function removeSpace(str) {
    return str.replace(/\s/g, "");
  }
});
