import React from 'react';
import Slider from "react-slick";
import "../style//slick.css";
import "../style/slick-theme.css"

const RecruitScrollMenu = () => {

    const settings = {
        // className: 'menu_scroll_button',
        pauseOnHover: true,
        // variableWidth: true,
        // centerMode: true,
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow:<br />,
        prevArrow:<br />,
      };
return (
<Slider {...settings} className="list_down_wrap_inner">
    <button className="list_down_wrap_btn">연봉이 최고의 복지 💰</button>
    <button className="list_down_wrap_btn">재택근무 🏠</button>
    <button className="list_down_wrap_btn">퇴사율 10% 이하 📍</button>
    <button className="list_down_wrap_btn">급성장 중 📈</button>
    <button className="list_down_wrap_btn">병역특례 🧑</button>
    <button className="list_down_wrap_btn">50인 이하 🔽</button>
    <button className="list_down_wrap_btn">50인 이상 🔼</button>
    <button className="list_down_wrap_btn">업력 5년 이상 🏢</button>
    <button className="list_down_wrap_btn">유연근무 🕰</button>
    <button className="list_down_wrap_btn">자유로운 휴가 🌴</button>
    <button className="list_down_wrap_btn">일한만큼 받는 보상 💵</button>
    <button className="list_down_wrap_btn">수평적인 문화 🙌</button>
    <button className="list_down_wrap_btn">요즘 뜨는 산업 😮</button>
    <button className="list_down_wrap_btn">식사·간식 제공 ☕️</button>
</Slider>
)
}

export default RecruitScrollMenu;