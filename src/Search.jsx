import React, { useState } from "react";
import Results from "./Results";
import "./index.css";
const Search = () => {
  const [img, setimg] = useState("");

  const inputimg = (event) => {
    const data = event.target.value;
    setimg(data);
  };
  return (
    <>
      <div id="container">
        <div class="main">
          <h1>Random Image Generator</h1>
          <input
            type="text"
            placeholder="Enter the Item"
            value={img}
            onChange={inputimg}
          />
        </div>

        <div className="img">{img === "" ? null : <Results name={img} />}</div>
      </div>
    </>
  );
};

export default Search;
