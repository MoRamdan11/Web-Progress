import React from "react";
import ReactDOM from "react-dom";
var fName = "Angela";
var lName = "Yu";
var randNumb = Math.floor(Math.random() * 100 + 1); //1 --> 100
ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>{`${fName} ${lName}`}</h1>
    <p>Your lucky number is {randNumb}</p>
  </div>,
  document.getElementById("root")
);
