import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import {Provider, useSelector, useDispatch} from 'react-redux';
import createStore from 'redux';
import { useContext } from 'react';
// import { BookmarkContext } from '../Context/BookmarkContext';
import { useState } from 'react';
import { useCallback } from "react";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";

/**
 * Name : BookmarkContent
 * Desc : 채용 페이지 하단 Content Component
 * Property
 *  - txt1 : 제목
 *  - txt2 : 회사명
 *  - txt3 : 응답률 정도
 *  - txt4 : 위치
 *  - txt5 : 채용보상금 액수
 *  - img : 링크
 **/

const BookmarkContent = ({img, txt1, txt2, txt3, txt4, txt5, id, onBookmarkFalse,onBookmarkTrue}) => {

    const txt6 =  txt5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
    // const [book, setBook] = useState(false);

    const trueIDArr = useSelector((state) => state.bookmark.trueID);
    // const dispatch = useDispatch();

    // const onBookmarkTrue = useCallback(
    //   (key) => dispatch(bookmarkTrue(key)),
    //   [dispatch]
    // );

    // const onBookmarkFalse = useCallback(
    //   (key) => dispatch(bookmarkFalse(key)),
    //   [dispatch]
    // );

return (
<li className="content">
   
        <div className="contimg" alt="">
            <img src={img} />
            <FontAwesomeIcon icon={faBookmark} className={trueIDArr.includes(id) ? 'bookmarkiconOn' : 'bookmarkicon'} onClick={(e)=>{
                
                    trueIDArr.includes(id)
                    ? onBookmarkFalse(id)
                    : onBookmarkTrue(id);

                    console.log(trueIDArr);
                
                e.preventDefault();}}/>
        </div>
        <div className="cont_title">{txt1}</div>
        <p className="cont_txt1">{txt2}</p>
        <p className="cont_txt2">응답률 {txt3}</p>
        <p className="cont_txt3">{txt4}</p>
        <p className="cont_txt4">채용보상금 {txt6}원</p>

</li>
)
}

export default BookmarkContent;