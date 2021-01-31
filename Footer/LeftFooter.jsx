import React from "react";

var iconStyle = {
  weight: "40px",
  height: "40px",
  margin: "15px 50px 0 30px"
};
function LeftFooter() {
  return (
    <div className="leftDiv">
      <img className="treat" src={require("./treat.png")} alt="Treat-min" />
      <a href="#">
        <img
          style={iconStyle}
          src={require("./icons/apple2.png")}
          alt="appStore"
        />
      </a>
      <a href="#">
        <img
          style={iconStyle}
          src={require("./icons/playstore.png")}
          alt="playStore"
        />
      </a>
    </div>
  );
}

export default LeftFooter;
