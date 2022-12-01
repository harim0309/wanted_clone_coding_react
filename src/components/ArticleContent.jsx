import React from 'react';
import ImgComponent from './ImageComponent';

/**
 * Name : ArticleContent
 * Desc : 3분 만에 읽는 아티클 컨텐츠 Component
 * Property
 *  - txt1 : 제목
 *  - txt2 : 내용
 *  - img : 메인 이미지
 **/

const ArticleContent = (props) => {
return (
<li className="content">
    <a href="#">
        <div className="contimg3" alt=""><ImgComponent src={props.img + ".webp"} alt="" /></div>
        <div className="cont_title">{props.txt1}</div>
        <p className="cont_des2">{props.txt2}</p>
    </a>
</li>
)
}

export default ArticleContent;