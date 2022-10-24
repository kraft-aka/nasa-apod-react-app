import React from "react";
import FetchApi from "./FetchApi";

const DisplayData = (props) => {
  console.log(props);
  return (
    <main>
    <img src={props.data.url} alt="" className="image" />
      <section>
        
        <h2 className="title">{props.data.title} | <span>{props.data.date}</span></h2>
        <p className="explanation">{props.data.explanation}</p>
        <p id="author">Credits: {props.data.copyright}</p>
       
      </section>
      
    </main>
  );
};

export default DisplayData;
