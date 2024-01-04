import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "../category2/data.json";
import tab1img from "../../img/category1/내용1.jpg";
import tab2img from "../../img/category1/내용2.jpg";
import tab3img from "../../img/category1/내용3.jpg";
import tab4img from "../../img/category1/내용4.jpg";
import "./main.css";

function Main() {
  document.title = "소담";
  const slides = jsonData;

  const images = [tab1img, tab2img, tab3img, tab4img];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
  };

  const youtubeData = ["https://www.youtube.com/embed/qu8OkSQPwUU"];

  return (
    <main>
      <div id="mslide">
        <h2>우리술의 종류</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Link to={`/category1/Hk2?tab=tab${index + 1}`}>
                <img
                  src={image}
                  alt={`이미지 ${index + 1}`}
                  style={{ width: "100%" }}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <article>
        <div className="main-container">
          <div className="main">
            <h3>공지사항/이벤트</h3>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <Link to={slide.index}>
                    <img src={slide.img} alt={slide.title} style={imageStyle} />
                  </Link>
                  <h4>{slide.title}</h4>
                </div>
              ))}
            </Slider>
          </div>
          <div className="ymain">
            <h3>우리술 영상</h3>

            {youtubeData.map((videoUrl, index) => (
              <div key={index}>
                <iframe
                  title="YouTube Video"
                  width="100%"
                  height="300px"
                  src={videoUrl}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}

export default Main;
