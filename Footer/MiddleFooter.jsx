import React from "react";
import Link from "./link";

function MidFooter() {
  return (
    <div className="midDiv">
      <div className="company">
        <h3>COMPANY</h3>
        <Link name="About us" />
        <Link name="Team" />
        <Link name="Advertise" />
        <Link name="Products" />
      </div>
      <div className="services">
        <h3>SERVICES</h3>
        <Link name="Outpatient Clinics" />
        <Link name="Medical Services" />
        <Link name="Special Rooms" />
        <a className="home" className="emergency" href="#">
          Emergency
        </a>
      </div>
      <div className="usefullinks">
        <h3>USEFUL LINKS</h3>
        <Link name="Home" />
        <Link name="My Account" />
        <Link name="Settings" />
        <Link name="Legal" />
        <Link name="Help" />
      </div>
    </div>
  );
}

export default MidFooter;
