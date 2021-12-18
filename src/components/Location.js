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
    &q=1st Floor, Guwahati Optical, Kabita Mansion, Commerce College, Commercial Point, Rajgarh Link Rd, Guwahati, Assam 781003"
        className="locate col-12 col-md-10"
        display="initial"
      />
    </div>
  );
}

export default Location;
