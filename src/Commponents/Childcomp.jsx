import React from "react";

export const Childcomp = (props) => {
  return (
    <div>
      <button onClick={props.greetHandeler}>Greetparent</button>
    </div>
  );
};
