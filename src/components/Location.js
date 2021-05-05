import React from "react";
import "../css/maincomponent.css";
import Iframe from "react-iframe";

function Location() {
  return (
    <div id="location" className="locate-container">
      <h3 data-aos="fade" className="heading">
        Locate Us
      </h3>
      <Iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtpCoYQ-cOKg9jmgtEsq84PfbP8BftMLA
    &q=Commerce College, Commercial Point, 1st Floor, Kabita Mansion, Rajgarh Link Rd, near Guwahati, Chandmari, Guwahati, Assam"
        className="locate"
        display="initial"
      />
    </div>
  );
}

export default Location;
