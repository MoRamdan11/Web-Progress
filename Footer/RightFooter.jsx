import React from "react";
import { IconButton } from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailIcon from "@material-ui/icons/Mail";

var phoneStyle = {
  color: "#00917c",
  marginLeft: "0",
  paddingLeft: "0"
};

var phoneNumber = {
  display: "inline",
  marginLeft: "5px"
};
var iconStyle = {
  weight: "30px",
  height: "30px",
  margin: "0 20px 0 0"
};

function RightFooter() {
  return (
    <div className="rightDiv">
      <h3>CONTACT US</h3>
      <div>
        <IconButton size="small" style={phoneStyle} href="#">
          <PhoneIphoneIcon />
        </IconButton>
        <p style={phoneNumber}>0112 861 1970</p>
      </div>
      <br />
      <div>
        <IconButton size="small" style={phoneStyle} href="#">
          <MailIcon />
        </IconButton>
        <p style={phoneNumber}>treat-min@gmail.com</p>
      </div>
      <br />
      <div>
        <a href="#">
          <img style={iconStyle} src={require("./icons/facebook.png")} />
        </a>
        <a href="#">
          <img style={iconStyle} src={require("./icons/instagram.png")} />
        </a>
        <a href="#">
          <img style={iconStyle} src={require("./icons/Twitter.png")} />
        </a>
        <a href="#">
          <img style={iconStyle} src={require("./icons/linkedin.png")} />
        </a>
      </div>
    </div>
  );
}

export default RightFooter;
