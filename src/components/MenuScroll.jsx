import React from 'react';
import Slider from "react-slick";
import "../style//slick.css";
import "../style/slick-theme.css"
import InsightBtn from '../components/InsightBtn';

const MenuScroll =  () => {

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
      };
  return (
    <Slider {...settings} className="menu_scroll">
                <InsightBtn txt={'리더십'} />
                <InsightBtn txt={'라이프스타일'} />
                <InsightBtn txt={'인간관계'} />
                <InsightBtn txt={'취업/이직'} />
                <InsightBtn txt={'회사생활'} />
                <InsightBtn txt={'IT/기술'} />
                <InsightBtn txt={'커리어고민'} />
                <InsightBtn txt={'조직문화'} />
                <InsightBtn txt={'개발'} />
                <InsightBtn txt={'데이터'} />
                <InsightBtn txt={'MD'} />
                <InsightBtn txt={'HR'} />
                <InsightBtn txt={'UX/UI'} />
                <InsightBtn txt={'노무'} />
                <InsightBtn txt={'디자인'} />
                <InsightBtn txt={'서비스기획'} />
                <InsightBtn txt={'브랜딩'} />
                <InsightBtn txt={'마케팅'} />
                <InsightBtn txt={'경영/전략'} />
                <InsightBtn txt={'콘텐츠 제작'} />
            </Slider>
  )
}

export default MenuScroll;