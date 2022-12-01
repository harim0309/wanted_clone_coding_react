import React from 'react';
import ImgComponent from './ImageComponent';

/**
 * Name : ActiveRecruit
 * Desc : 적극 채용 중인 회사 Content Component
 * Property
 *  - txt1 : Company Name
 *  - txt2 : 포지션 갯수
 *  -img1 : 메인이미지 파일명
 *  -img2 : 회사 이미지 파일명
 **/

const ActiveRecruit = (props) => {
return (
<li>
    <div>
        <div className="img"><ImgComponent src={props.img1 + ".webp"} /></div>
        <div className="txt">
            <p>{props.txt2}</p>
            <p>{props.num}개의 포지션</p>
        </div>
        <div className="name">
            <ImgComponent src={props.img2 + ".webp"} />
        </div>
    </div>
</li>
)
}

export default ActiveRecruit;