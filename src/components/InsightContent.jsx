import React from 'react';
import ImgComponent from './ImageComponent';

/**
 * Name : InsightContent
 * Desc : 나에게 필요한 커리어 인사이트 컨텐츠 Component
 * Property
 *  - txt1 : 제목
 *  - txt2 : 내용
 *  - name : 작성자명
 *  - img1 : 메인 이미지
 *  - img2 : 작성자 이미지
 **/

const InsightContent = (props) => {
return (
<li className="content">
    
        <div className={props.img1 === undefined ? "contimg_empty" : "contimg"} >
            <ImgComponent src={props.img1} class={props.img1 === undefined ? "cont_empty" : "img"} style={props.style == "width" && {height:"auto" , width:"100%"}} />
        </div>
        <div className="cont_title">{props.txt1}</div>
        <p className="cont_des">{props.txt2}</p>
        <div className="writer">
            <ImgComponent class={"contimg2"} src={props.img2 + ".webp"} />
            <span>{props.name}</span>
        </div>
  
</li>
)
}

export default InsightContent;

InsightContent.defaultProps = {
    img1: 'default.png',
}