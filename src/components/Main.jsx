import React from "react";
import "./Main.css";

function Main({ item }) {
  return (
    <>
      <div className="Main">
        <>
          <div className="Main__left" key={item.id}>
            <h1>{item.title}</h1>
            <p className="Main__left__Date">
              {item.date} By {item.author}
            </p>
            <p className="Main__left__Desc">{item.description}</p>
          </div>

          <div key={item.title + "image"} className="Main__right">
            <img className="Main__rightImage" src={item.image} alt="" />
          </div>
        </>
      </div>
    </>
  );
}

export default Main;
