import React from 'react';
import '../style/searchresult.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import RecruitScrollMenu from '../components/RecruitScrollMenu';
import bookmarkjson from "../json/bookmarkcontent.json";
import BookmarkContent from '../components/BookmarkContent';
import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const SearchResult = ({num1,num2}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    
    const filtered = bookmarkjson.content.filter((itemList) => {
      return itemList.txt1.includes(tag) || itemList.txt2.includes(tag);
    })

    // const filtered2 = bookmarkjson.content.filter((itemList) => {
    //   return itemList.name.includes(tag) || itemList.txt.includes(tag);
    // })

    console.log(tag);

    // https://sunnyfterrain.github.io/devlog/tips-react-search.html

    const search = searchParams.get('tag');
    
return (
<div className='searchresultWrap'>
    <div className="title">
        <p>{search}</p>
    </div>
    <div className="searchBody">
        <div className="searchCompany">
            <h2>회사 {filtered.length}</h2>
            <div className="companylist">
            {filtered.map((itemList)=>{
                return <FollowBox 
                key={itemList.id}
                txt2={itemList.txt2}
                txt={itemList.txt}
                src={itemList.src}
                />
            })}
            </div>
        </div>
        <div className="searchPosition">
            <h2>포지션 {filtered.length}</h2>
            <div className="list">
                <div className="list_up">
                    <div className="list_up_left">
                        <button>
                            <span>지역</span>
                            <span>한국</span>
                            <span>1</span>
                        </button>
                        <button>
                            <span>경력</span>
                            <span>전체</span>
                            <FontAwesomeIcon icon={faCaretDown} className='arrowDownicon2' />
                        </button>
                        <button>
                            <span>기술스택</span>
                            <FontAwesomeIcon icon={faCaretDown} className='arrowDownicon2' />
                        </button>
                    </div>
                    <div className="list_up_right">
                        <button>
                            <span>응답률순</span>
                            <FontAwesomeIcon icon={faCaretDown} className='arrowDownicon2' />
                        </button>
                    </div>
                </div>
                <hr />
                <div className="list_down">
                <button className='arrows'>‹</button>
                    <div className="list_down_wrap">
                        <RecruitScrollMenu />
                    </div>
                <button className='arrows right'>›</button>
                </div>
                
            </div>
            <ul className="contents02">
                {/* {bookmarkjson.content.filter((val) =>{
                    if(searchTerm == ""){
                        return val
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map(bookmark => {
                    <BookmarkContent 
                    key={bookmark.id}
                    txt1={bookmark.txt1}
                    txt2={bookmark.txt2}
                    txt3={bookmark.txt3}
                    txt4={bookmark.txt4}
                    txt5={bookmark.txt5}
                    img={bookmark.img}
                    />
                })} */}
            {/* {bookmarkjson.content.map((bookmark)=>(
                    <BookmarkContent 
                    key={bookmark.id}
                    txt1={bookmark.txt1}
                    txt2={bookmark.txt2}
                    txt3={bookmark.txt3}
                    txt4={bookmark.txt4}
                    txt5={bookmark.txt5}
                    img={bookmark.img}
                    />
                ))
            } */}
            {filtered.map((itemList)=>{
                
                return <Link to={`${itemList.id}`} ><BookmarkContent 
                key={itemList.id}
                txt1={itemList.txt1}
                txt2={itemList.txt2}
                txt3={itemList.txt3}
                txt4={itemList.txt4}
                txt5={itemList.txt5}
                img={itemList.img}
                />
                </Link>
            })}
            </ul>
        </div>
    </div>
</div>
)
}

export default SearchResult;

const FollowBox = (props) => {
    return (
<div className="follow_box">
    <div className="left">
        <img src={props.src} />
        <div className="txt_wrap">
            <h4>{props.txt2}</h4>
            <h5>{props.txt}</h5>
        </div>
    </div>
    <div className="right">
        팔로우
    </div>
</div>
)
}