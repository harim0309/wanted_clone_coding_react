import React from 'react';
import Slider from "react-slick";
import SlideContent from "../../components/SlideContent";
import bookmarkcontent from '../../json/bookmarkcontent.json';

const DetailSlider = ({pageId}) => {

    const settings = {
        pauseOnHover: true,
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const company = bookmarkcontent.content.filter(
        (company) => company.id === pageId
      )[0];

return (
<Slider {...settings} className="detail01_slider">
    <SlideContent
        src={`${company.slideimg}`} />
    <SlideContent
        src={"https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75"} />
    <SlideContent
        src={"https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75"} />
    <SlideContent
        src={"https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75"} />
</Slider>
)
}

export default DetailSlider;