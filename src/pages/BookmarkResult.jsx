import React from 'react';
import '../style/bookmarks.scss';
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";
import bookmarkjson from "../json/bookmarkcontent.json";
import { Link } from 'react-router-dom';
import BookmarkContent from '../components/BookmarkContent';

const BookmarkResult = () => {
    const trueIDArr = useSelector((state) => state.bookmark.trueID);

    const dispatch = useDispatch();

    const onBookmarkTrue = useCallback(
      (id) => dispatch(bookmarkTrue(id)),
      [dispatch]
    );

    const onBookmarkFalse = useCallback(
      (id) => dispatch(bookmarkFalse(id)),
      [dispatch]
    );

    const filtered = bookmarkjson.content.filter((content) => {
        return trueIDArr.includes(Number(content.id));
        
      })

      // console.log(filtered);

  return (
    <div className='bookmarks'>
        <h1>북마크 모아보기</h1>
     <div>
        {filtered=='' ? <p className='bookempty'>북마크가 비었습니다</p> : filtered.map((content) => (
          <Link to={`${content.id}`} >
            <BookmarkContent 
            key={content.id}
            id={content.id}
            txt1={content.txt1}     
            txt2={content.txt2}
            txt3={content.txt3}
            txt4={content.txt4}
            txt5={content.txt5}
            img={content.img}
            onBookmarkTrue={onBookmarkTrue}
            onBookmarkFalse={onBookmarkFalse}
            />
            </Link>
        ))}
          </div> 
    </div>
  )
}

export default BookmarkResult;