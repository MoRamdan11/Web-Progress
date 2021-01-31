import React from "react";
import ReactDOM from "react-dom";
//Create a react app from scratch.
var name = "Mohamed Ramdan";
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>All rights Reserved &copy; {currentYear}</p>
  </div>,
  document.querySelector("#root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
