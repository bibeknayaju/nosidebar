import React from "react";
import "./Bict.css";
import Download from "../components/Download";
import data from "../data/downloadData";
function Bict() {
  return (
    <div className="Bict">
      <div className="Bict__downloads">
        <button>Download</button>
      </div>
      <div className="Bict__ListAll">
        {data.map((item) => (
          <Download item={item} />
        ))}
      </div>
    </div>
  );
}

export default Bict;
