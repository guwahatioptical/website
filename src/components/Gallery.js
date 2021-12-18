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

  const brands = [
    dkny,
    essilor,silhovette,idee,prada,puma,RayBanCompany,hoya,vogue,youngeroptics
  ]

  return (
    <div
      id="gallery"
      className="gallery col-12 justify-content-evenly"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="col-11 mx-auto">
        <h3 data-aos="fade" className="heading">
          Gallery
        </h3>
        {images.map((image, index) => (
          <img
            data-aos="fade-up"
            key={index}
            src={image}
            alt="img"
            className="col-3 col-md-2 my-md-3  mx-md-4 mx-2 my-2"
          />
        ))}
      </div>
      <div className="brands col-10 mx-auto">
        <h3 data-aos="fade-in" className="heading col-12">
          Brands Available
        </h3>
        {brands.map((image, index) => (
          <img
            data-aos="fade-up"
            key={index}
            src={image}
            alt="img"
            className="col-3 col-md-2 my-md-3  mx-md-4 mx-2 my-2"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
