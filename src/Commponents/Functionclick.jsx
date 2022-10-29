import React from "react";

export const Functionclick = () => {
  function clickHandeller() {
    console.log("clicked");
  }

  return (
    <div>
      <button onClick={clickHandeller}>Click</button>
    </div>
  );
};
