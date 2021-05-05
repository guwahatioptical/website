import React from 'react'
import "../css/maincomponent.css"
import {
  dkny,
  essilor,
  hoya,
  idee,
  prada,
  puma,
  RayBanCompany,
  silhovette,
  vogue,
  youngeroptics,
  g834,
  g856,
  g1244,
  g1248,
  g1256,
  g1260,
  g1264,
  g1317,
  g1321,
  g1325,
  g1329,
  g1333,
  g1337,
  g1389,
  g1393,
  g1397,
  g1401,
  g1405,
  g1451,
  g1455,
  g1459,
  g1463,
  g1467,
  g1471,
  g1475,
  g1479,
  g1480,
  g1485,
  g1491,
  g1494,
  g1498,
} from "../images/image";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Gallery() {
  const images = [
    g834,
    g856,
    g1244,
    g1248,
    g1256,
    g1260,
    g1264,
    g1317,
    g1321,
    g1325,
    g1329,
    g1333,
    g1337,
    g1389,
    g1393,
    g1397,
    g1401,
    g1405,
    g1451,
    g1455,
    g1459,
    g1463,
    g1467,
    g1471,
    g1475,
    g1479,
    g1480,
    g1485,
    g1491,
    g1494,
    g1498,
  ];

  return (
    <div id="gallery" className="gallery" style={{ backgroundColor: "#fff" }}>
      <div className="photos">
        <h3 data-aos="fade" className="heading">
          Gallery
        </h3>
        {images.map((image, index) => (
          <img
            data-aos="fade-up"
            style={{ margin: "1vh 2vw" }}
            key={index}
            src={image}
            alt="img"
          />
        ))}
      </div>
      <div className="brands">
        <h3 data-aos="fade-in" className="heading">
          Brands Available
        </h3>
        <li style={{ marginTop: "4vh" }}>
          <img data-aos="zoom-in-up" src={dkny} alt="brand" />
          <img data-aos="zoom-in-up" src={essilor} alt="brand" />
          <img data-aos="zoom-in-up" src={silhovette} alt="brand" />
          <img data-aos="zoom-in-up" src={idee} alt="brand" />
        </li>
        <li>
          <img data-aos="zoom-in-up" src={prada} alt="brand" />
          <img data-aos="zoom-in-up" src={puma} alt="brand" />
          <img data-aos="zoom-in-up" src={RayBanCompany} alt="brand" />
          <img data-aos="zoom-in-up" src={hoya} alt="brand" />
        </li>
        <li style={{ marginTop: "3vh" }}>
          <img data-aos="zoom-in-up" src={vogue} alt="brand" />
          <img data-aos="zoom-in-up" src={youngeroptics} alt="brand" />
        </li>
      </div>
    </div>
  );
}

export default Gallery;
