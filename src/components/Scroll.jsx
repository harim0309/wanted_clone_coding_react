import React, { useEffect, useState, useCallback } from 'react';
import bookmarkjson from "../json/bookmarkcontent.json";
import { Link } from "react-router-dom";
import BookmarkContent from '../components/BookmarkContent';
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";
import { useDispatch } from "react-redux";
// import '../style/scroll.scss'


const Scroll = () => {

  const dispatch = useDispatch();

  const onBookmarkTrue = useCallback(
    (key) => dispatch(bookmarkTrue(key)),
    [dispatch]
  );

  const onBookmarkFalse = useCallback(
    (key) => dispatch(bookmarkFalse(key)),
    [dispatch]
  );

  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      setDataLen((prev) => prev + 4);
    }
  };

  useEffect(() => {
    const list = bookmarkjson.content.filter(
      (bookmark, i) => i < dataLen + 4
    );
    setData((prev) => [...list]);
  }, [dataLen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='contents02'>
      {
                data.map((bookmark)=>(
                    <Link to={`${bookmark.id}`} >
                    <BookmarkContent 
                    key={bookmark.id}
                    id={bookmark.id}
                    txt1={bookmark.txt1}
                    txt2={bookmark.txt2}
                    txt3={bookmark.txt3}
                    txt4={bookmark.txt4}
                    txt5={bookmark.txt5}
                    img={bookmark.img}
                    onBookmarkTrue={onBookmarkTrue}
                    onBookmarkFalse={onBookmarkFalse}
                    />
                    </Link>
                    
                ))
            }
    </div>
  )
}

export default Scroll;