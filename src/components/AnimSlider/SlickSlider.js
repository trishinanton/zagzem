import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import "./slider-animations.css"
import "./styles.css";
import "./button.css";
import axios from "axios";
import slide1 from '../../img/images/ecokvarial.jpeg';
import slide2 from '../../img/images/apelsin.jpg';
import slide3 from '../../img/images/festival.jpeg';
import slide4 from '../../img/images/bitaygovo.jpeg';

const content = [
    {
        descr: <span>Скидка на участки до&nbsp;15% в посёлке ЭкоКвартал Раздолье!</span>,
        title: "Участки ИЖС в 22 км. От МКАД по Володарскому шоссе!",
        button: "Подробнее",
        image: `${slide1}`,
        link: '/village/ekoKvartal-razdole',
    },
    {
        descr: "Успейте купить участки в посёлке Апельсин, в рассрочку на 24 месяца!",
        title: "Участки 97 км. От МКАД по Киевскому шоссе!",
        button: "Подробнее",
        image: `${slide2}`,
        link: '/village/apelsin',
    },
    {
        descr: "Участки в 15 минутах от ж/д Белоозерская, в посёлке Фестиваль!",
        title: "",
        button: "Подробнее",
        image: `${slide3}`,
        link: '/village/festival',
    },
    {
        descr: <span>Участки в посёлке Новое Битягово, в&nbsp;3&nbsp;минутах от&nbsp;Домодедово от&nbsp;1&nbsp;288&nbsp;980&nbsp;рублей!</span>,
        title: "",
        button: "Подробнее",
        image: `${slide4}`,
        link: '/village/novoe-bityagovo',
    }
];

export function SlickSlider() {
    const [loading, setLoading] = React.useState(true);
    const [sliderData, setSliderData] = React.useState()
    
    React.useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const {data: response} = await axios.get('https://skgrouptrans.ru/gp-wp-projects/wp-json/wp/v2/slider?per_page=100')

          const {slider} = response[0].acf
          setSliderData(slider)
        } catch(error) {
          console.error(error.message)
        }
        setLoading(false)
      }

      fetchData()
      
      // .then(res => {
      //   const {slider} = res.data[0].acf
      //   setSliderData(slider)
      // })
      // .catch(err => console.log(err))
    }, [])
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
        adaptiveHeight:true,
        autoplay: true,
        autoplaySpeed: 4000
    };
    const divStyle = {
        background: 'blue'
    }
    return (
        <Slider {...settings}>
          {!loading && (
            sliderData.map((item, index) => (
                  <>
                      <div
                          key={index}
                          style={{background: `url('${item.image}') no-repeat center center`, backgroundSize:'cover', borderRadius: '15px'}}
                          className="slider-content"
                      >
                      <div style={{position:'absolute', width:'100%', height:'100%', background: 'linear-gradient(180deg,rgba(16,7,0,.72) 36.73%,rgba(31,14,3,.1152) 124.33%)', borderRadius: '15px'}}>
                          <div  className="inner">
                              <h2 className='slider_descr'>{item.descr}</h2>
                              <h3>{item.title2} {item.title}</h3>
                              <Link to={item.link}>
                                  <button className="btn-slider">{item.button}</button>
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