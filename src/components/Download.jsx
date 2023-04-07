import React from "react";
import "./Download.css";
function Download({ item }) {
  return (
    <div className="Download" key={item.id}>
      <div className="Download__list">
        <p>{item.icon}</p>
        <h4>{item.title}</h4>
      </div>
    </div>
  );
}

export default Download;
