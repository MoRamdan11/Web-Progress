import { ReportProblemSharp } from "@material-ui/icons";
import React from "react";

var customStyle = {
  marginBottom: "10px"
};
function Link(probs) {
  return (
    <a className="home" href="#" style={customStyle}>
      {probs.name}
    </a>
  );
}

export default Link;
