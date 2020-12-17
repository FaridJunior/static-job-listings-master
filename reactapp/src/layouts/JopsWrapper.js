import React from "react";

function JopsWrapper(props) {
  console.log("props.filtaredData", props.filtaredData);
  return (
    <div>
      {props.filtaredData &&
        props.filtaredData.map((jop) => <li>{jop.level}</li>)}
    </div>
  );
}

export default JopsWrapper;
