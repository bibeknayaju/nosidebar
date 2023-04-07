import React from "react";
import Main from "./Main";
import data from "../data/data";
import "./Alldata.css";

function Alldata() {
  return (
    <>
      {data.map((item) => (
        <div className="Alldata__Main">
          <Main item={item} />
        </div>
      ))}
    </>
  );
}

export default Alldata;
