import React from 'react'
import '../css/reviews.css'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Review({ r_index, fullName, review, rating, color }) {
  const rates = rate => {
    switch (rate) {
      case 1:
        return [1, 0, 0, 0, 0];
      case 1.5:
        return [1, 0.5, 0, 0, 0];
      case 2:
        return [1, 1, 0, 0, 0];
      case 2.5:
        return [1, 1, 0.5, 0, 0];
      case 3:
        return [1, 1, 1, 0, 0];
      case 3.5:
        return [1, 1, 1, 0.5, 0];
      case 4:
        return [1, 1, 1, 1, 0];
      case 4.5:
        return [1, 1, 1, 1, 0.5];
      case 5:
        return [1, 1, 1, 1, 1];
      default:
        return 0;
    }
  }

  return (
    <div
      style={{
        backgroundColor: color,
        float: r_index % 2 === 0 ? "left" : "right",
      }}
      data-aos="flip-up"
          className="review-container"
        >
          <div className="name">
            {fullName} |{" "}
            {rates(rating).map((e, index) => {
              if (e <= 0) return <FaRegStar key={index} />;
              else if (e < 1) return <FaStarHalfAlt key={index} />;
              else return <FaStar key={index} />;
            })}
          </div>
          <div className="review">{review}</div>
        </div>
    );
}

function Reviews() {
    const reviews = [
      {
        fullName: `MRIJESH M.`,
        review: `Spectacle buying experience has never been so easy before. I loved their pricing and customer service. Will definitely shop here again!`,
        rating: 4,
        color: "rgb(139, 218, 255)",
      },
      {
        fullName: `SMRUTHI B.`,
        review: `Top-notch frames at very reasonable prices.`,
        rating: 5,
        color: "rgb(255 177 138)",
      },
      {
        fullName: `MUDITH G.`,
        review: `My friend had recommended me to Guwahati Optical & I totally agree with her statement - Stylish products & budget friendly!`,
        rating: 4,
        color: "rgb(172 255 139)",
      },
      {
        fullName: `SHRADDHA R.`,
        review: `Great price, great quality, great styles, great customer service. First-grade products with affordable prices. I’ve already recommended Guwahati Optical to three friends.`,
        rating: 4,
        color: "rgb(255 139 139)",
      },
      {
        fullName: `SOUMYA A.`,
        review: `The spectacles are of high quality and economical!`,
        rating: 3.5,
        color: "rgb(255 247 139)",
      },
      {
        fullName: `RADHA H.`,
        review: `Tried it for the first time and totally in love with the experience. Economical, wide range of options & impeccable QUALITY!`,
        rating: 3.5,
        color: "rgb(190 139 255)",
      },
      {
        fullName: `ANDREA S.`,
        review: `This is my third pair of spectacles from here and can definitely regard Guwahati Optical as the epitome of quality & SERVICE.`,
        rating: 4,
        color: "#00bcd4",
      },
      {
        fullName: `OM PRAKASH R.`,
        review: `Recently got a pair of glasses with blue cut lenses. They are amazing at affordable price.`,
        rating: 3.5,
        color: "#8bc34a",
      },
      {
        fullName: `KRISHNA J.`,
        review: `Well,my experience with the store is highly satisfactory...They offer eye fashion which one can't refuse ...I recommend the store to all age groups especially women and kids...`,
        rating: 4.5,
        color: "rgb(255 210 139)",
      },
      {
        fullName: `JONES K.`,
        review: `Excellent customer service! Staff was amiable & helpful.`,
        rating: 4,
        color: "#ffc107",
      },
  ];
  const getReviews = () => {
    let start = 0, end = 0, len = reviews.length, n = Math.floor(Math.random() * len)
    if (len - n > 6) {
      start = n
      end = n + 6    }
    else if (len - n <= 3) {
      start = n - 6;
      end = n;
    } else{
      start = n - 3;
      end = n+3;
    }
    return reviews.slice(start,end)
  }
    return (
      <div id="reviews">
        <h3 data-aos="fade-in" className="review-heading">Happy Customers</h3>
        <div className="reviews">  {getReviews().map((review, index) => 
          <Review key={index} r_index={index} {...review} />
        )
        }</div>
        </div>
    )
}

export default Reviews
