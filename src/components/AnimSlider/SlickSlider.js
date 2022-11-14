import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import "./slider-animations.css"
import "./styles.css";
import "./button.css";
import {useAcfAsync} from "./utils";
import uuid from "react-uuid";

export function SlickSlider() {

  const {loading, data} = useAcfAsync('https://zagzem.ru/wp-backend/wp-json/wp/v2/slider?per_page=100')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow:true,
    adaptiveHeight:true,
    autoplay: true,
    autoplaySpeed: 4000
  }

  return (
    <Slider {...settings}>
      {!loading && (
        data.slider.map(({descr, title, title2, link, button, image}, index) => (
          <>
            <div
                key={uuid()}
                style={{background: `url('${image}') no-repeat center center`, backgroundSize:'cover', borderRadius: '15px'}}
                className="slider-content"
            >
              <div style={{position:'absolute', width:'100%', height:'100%', background: 'linear-gradient(180deg,rgba(16,7,0,.72) 36.73%,rgba(31,14,3,.1152) 124.33%)', borderRadius: '15px'}}>
                  <div  className="inner">
                    <h2 className='slider_descr'>{descr}</h2>
                    <h3>{title2} {title}</h3>
                    <Link to={link}>
                        <button className="btn-slider">{button}</button>
                    </Link>
                  </div>
                </div>
            </div>
          </>
        ))
      )}
    </Slider>
  );
}
