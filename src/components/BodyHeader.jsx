import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BodyHeader = (props) => {
return(
<div className="body2_header">
    <p className="arrow none">
        <FontAwesomeIcon icon={faChevronLeft} className={'arrows'}/>
    </p>
    <div className="middle">
        <h2>{props.title}</h2>
        <p>{props.sub} <FontAwesomeIcon icon={faChevronRight}  /></p>
    </div>
    <p className="arrow">
        <FontAwesomeIcon icon={faChevronRight} className={'arrows'} />
    </p>
</div>
)
}

export default BodyHeader;