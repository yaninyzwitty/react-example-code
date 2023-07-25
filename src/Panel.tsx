import React, {useState} from "react";
type Props = {
  handleClick: () => void;
  count: number;
};
function Panel({handleClick, count}: Props) {
  return (
    <div>
      {count}
      <button
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
        }}
        onClick={handleClick}
      >
        Add me
      </button>
    </div>
  );
}

export default Panel;
