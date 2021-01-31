import React from "react";
import LeftFooter from "./LeftFooter";
import MidFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var rights = {
  position: "absolute",
  bottom: "20px",
  marginLeft: "700px",
  display: "block",
  fontWeight: "bold",
  color: "#00917c"
};
function Footer() {
  return (
    <footer>
      <LeftFooter />
      <MidFooter />
      <RightFooter />
      <div style={rights}>
        <p>All Rights Reserved, Copyright &copy; Treat-min {currentYear}</p>
      </div>
    </footer>
  );
}
export default Footer;
