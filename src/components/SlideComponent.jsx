
import React from 'react'
import ImgComponent from './ImageComponent';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "../style//slick.css";
import "../style/slick-theme.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SlideComponent = () => {
    const settings = {
        pauseOnHover: true,
        variableWidth: true,
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
return (
<div className="full">
    <div className="slider_wrap">
        <Slider {...settings} className="slider">
            <SliderContent txt1={'기업이 원하는 프론트 개발자 되기'} txt2={'프리온보딩 프론트엔드 코스'} img={'slider01'} />
            <SliderContent txt1={'우리 회사를 소개합니다'} txt2={'"회사"에 대한 정보, 원티드가 찾아드릴게요!'} img={'slider02'} />
            <SliderContent txt1={'뽑히는 개발자 이력서!?'} txt2={'그 비밀을 무료로 확인하세요'} img={'slider03'} />
            <SliderContent txt1={'검사/변호사 출신 엔지니어를 만나다'} txt2={'AI 엔지니어 커리어 인터뷰'} img={'slider04'} />
            <SliderContent txt1={'어디서도 듣지 못한 피치스 브랜드 이야기'} txt2={'브랜드가 영생하는 방법 그리고 피치스의 미래'} img={'slider05'} />
            <SliderContent txt1={'11월 원티드살롱'} txt2={'채용을 더 잘 할 수 있는 방법을 함께 고민합니다.'} img={'slider06'} />
            <SliderContent txt1={'우형의 개발자들은 어떻게 일할까?'} txt2={'영상과 밋업으로 확인해보세요!'} img={'slider07'} />
            <SliderContent txt1={'Startup Recruiting Bootcamp 2기'} txt2={'스타트업 인재 채용을 위한 교육'} img={'slider08'} />
        </Slider>

    </div>
</div>
)
}

/**
 * Name : SliderContent
 * Desc : 메인 페이지 슬라이드 배너 컨텐츠 Component
 * Property
 *  - img : 이미지 파일명
 *  - txt1 : 배너 제목
 *  - txt2 : 배너 소제목
 **/

const SliderContent = (props) => {
return(
<div className="slider_cont">
    <div className="img">
        <ImgComponent src={props.img + ".webp"} />
    </div>
    <div className="inner_box">
        <h2>{props.txt1}</h2>
        <h3>{props.txt2}</h3>
        <hr />
        <a href="#">
            <span>바로가기</span>
            <FontAwesomeIcon icon={faChevronRight} className={'arrow'} />
        </a>
    </div>
</div>
)
};

export default SlideComponent