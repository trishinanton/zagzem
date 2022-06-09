import React, {useEffect} from "react";
import Slider from "react-animated-slider";
import { Link } from 'react-router-dom';
import ArrowBottomAnim from '../ArrowBottomAnim'
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css"
import "./styles.css";
import "./button.css";
import slide1 from '../../img/images/kp-35-2.jpg'

const content = [
  {
    descr: "Скидка 9% на участки в поселке Шелест",
    title: "Только до 31 октября!",
    button: "Подробнее",
    image: "https://zagzem.ru/img/kp-3-1.jpg",
    link: '/village/shelest',
  },
  {
    descr: "Скидка 10% на участки в поселке Фишер",
    title: "Только до 31 октября!",
    button: "Подробнее",
    image: "https://zagzem.ru/img/kp-35-2.jpg",
    link: '/village/fisher',
  },
  {
    descr: "Скидка до 10% на участки в поселке Фаворит",
    title: "Только до 31 октября!",
    button: "Подробнее",
    image: "https://zagzem.ru/img/kp-34-1.jpg",
    link: '/village/favorit',
  },
  {
    descr: "Участки в поселке Ртищево",
    title: "В пешей доступности от ж/д Вельяминово",
    button: "Подробнее",
    image: "https://zagzem.ru/img/kp-51-1.jpg",
    link: '/village/rtishevo',
  }
];

const AnimSlider = () => (
  <div>
    <Slider
      // autoplay
        infinite
        disabled={false}
      touchDisabled={false}
      className="slider-wrapper"
    >
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h2>{item.descr}</h2>
            <h3>{item.title2} {item.title}</h3>
            <Link to={item.link}>
                <button className="btn btn-white btn-animate">{item.button}</button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
    <ArrowBottomAnim />
  </div>
);

export default AnimSlider
