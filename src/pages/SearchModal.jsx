import React from 'react';
import '../style/searchmodal.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({searchclass,closeSearch}) => {

    const searchClose = () => {
        closeSearch(false);
        console.log('!!!');     
    };

    const searchRef = useRef(null);
    
    useEffect(() => {
      searchRef.current.focus();
    }, []);


 const navigate = useNavigate();
 const [search, setSearch] = useState();

 const searchStart = (e) => {
    setSearch(e.target.value);
 }
 
    const onKeyPress = (e) => {
        if(setSearch == ''){
            alert('검색어를 입력하세요.')
        }else{
        if(e.key == 'Enter') {
            navigate(`/searchresult?tag=${search}`);
            closeSearch(false);
            
        }
    }
    }

  return (
    <div className={searchclass}>
        <div className="searchModal">
            <div className="inputbox">
                <input type="text" placeholder='#태그, 회사, 포지션 검색' ref={searchRef} onKeyPress={onKeyPress} onChange={searchStart}/>
                <FontAwesomeIcon icon={faSearch} className="search" />
                <FontAwesomeIcon icon={faTimes} className='close' />
            </div>
            <div className="txt">
                <p>추천태그로 검색해보세요</p>
                <p>기업태그 홈 이동하기<FontAwesomeIcon icon={faChevronRight} className={'arrow'} /></p>
            </div>
            <ul className="tags">
                <Button txt={'단체보험'} />
                <Button txt={'스타트업'} />
                <Button txt={'연봉상위2~5%'} />
                <Button txt={'퇴사율5%이하'} />
                <Button txt={'설립4~9년'} />
            </ul>
        </div>
        <div className="searchBlack" onClick={searchClose}></div>
    </div>
  )
}

export default SearchModal;


const Button = (props) => {
    return (
        <li><Link to='#'>#{props.txt}</Link></li>
    )
}