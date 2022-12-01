import React from 'react';
import ImgComponent from './ImageComponent';

/**
 * Name : VodContent
 * Desc : 직장인을 위한 VOD 컨텐츠 Component
 * Property
 *  - txt1 : 부제목
 *  - txt2 : 제목
 *  - txt3 : 정보
 *  - name : 작성자명
 *  - img : 메인 이미지
 **/

const VodContent = (props) => {
return (
<li className="content">
    <a href="#">
        <div className="contimg3" alt=""><ImgComponent src={props.img + ".webp"} /></div>
        <p className="cont_txt">{props.txt1}</p>
        <div className="cont_title2">{props.txt2}</div>
        <p className="cont_des2">{props.txt3}</p>
    </a>
</li>
)
}

export default VodContent;