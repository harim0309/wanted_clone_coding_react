import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


/**
 * Name : RecruitContent
 * Desc : 메인페이지 하단 채용 정보를 찾고 계셨나요 Component
 * Property
 *  - txt : 메뉴명
 **/

const RecruitContent = (props) => {
return (
<div className="box">
    <a href="#">
        <div><FontAwesomeIcon icon={props.icon} className='recruitIcon' /></div>
        <p>{props.txt} </p>
    </a>
</div>
)
}

export default RecruitContent;