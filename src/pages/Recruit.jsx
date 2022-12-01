import React, {useState} from 'react';
// import '../style/header.scss'
import '../style/recruit.scss';
import '../style/footer.scss';
import Footer from '../components/Footer';
import ActiveRecruit from '../components/ActiveRecruit';
import BookmarkContent from '../components/BookmarkContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import RecruitScrollMenu from '../components/RecruitScrollMenu';
import { Link } from "react-router-dom";
import bookmarkjson from "../json/bookmarkcontent.json";
import { useCallback } from "react";
import { useDispatch} from "react-redux";
import { bookmarkTrue, bookmarkFalse } from "../modules/bookmark";
import Scroll from '../components/Scroll';


const Recruit = () => {

    // const navigate = useNavigate();

    // const goto = () => {
    //     navigate('/')
    // }

    // const [bookmark, setBookmark] = useState(false);


    // const trueIDArr = useSelector((state) => state.bookmark.trueID);

    const dispatch = useDispatch();

    const onBookmarkTrue = useCallback(
      (key) => dispatch(bookmarkTrue(key)),
      [dispatch]
    );

    const onBookmarkFalse = useCallback(
      (key) => dispatch(bookmarkFalse(key)),
      [dispatch]
    );

  return (
    <div id="recruitWrap">
        <div className="body">
            <div className="category">
                <div className="category01">개발 <span><FontAwesomeIcon icon={faChevronDown} className='arrowDownicon' /></span></div>
                <div className="category02">개발 전체 <span><FontAwesomeIcon icon={faChevronDown} className='arrowDownicon' /></span></div>
            </div>
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
                    <div className="list_down_wrap">
                        <RecruitScrollMenu />
                    </div>
                </div>
                
            </div>
            <hr className="hr" />
            <div className="bookmark">
                <div className="bookmark_inner">
                    <FontAwesomeIcon icon={faBookmark} className="bookmarkicon" />
                    <Link to={'/bookmarks'}>북마크 모아보기</Link>
                    <FontAwesomeIcon icon={faChevronRight} className='arrow' />
                </div>
            </div>
            <h3>적극 채용 중인 회사</h3>
            <ul className="contents01">
            {
                bookmarkjson.content.map((cont)=>(
                    <Link to={`${cont.id}`} >
                        <ActiveRecruit 
                        key={cont.id}
                        num={cont.num}
                        txt2={cont.txt2}
                        img1={cont.img1}
                        img2={cont.img2}
                        />
                    </Link>
                ))
            }
            </ul>
            <ul className="contents02">
   
            {
                bookmarkjson.content.map((bookmark)=>(
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
  
            </ul>
            <Scroll />
        </div>
<Footer />

    </div>
  )
}

export default Recruit;