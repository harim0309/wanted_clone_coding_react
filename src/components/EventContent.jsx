import React from 'react'
import ImgComponent from './ImageComponent'

/**
 * Name : EventContent
 * Desc : 커리어 성장 맞춤 이벤트 컨텐츠 Component
 * Property
 *  - txt1 : 제목
 *  - txt2 : 날짜
 *  - img : 메인 이미지
 **/

const EventContent = (props) => {
return (
<li className="content3">
    <a href="#">
        <div className="contimg4" alt=""><ImgComponent src={props.img + ".webp"} /></div>
        <span className="online">온라인</span>
        <span className="net">네트워킹</span>
        <div className="cont_title2">{props.txt1}</div>
        <p className="cont_des2">{props.txt2}</p>
    </a>
</li>
)
}

export default EventContent