import ImgComponent from "./ImageComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useState } from "react";
// import { Ellipsis } from "react-bootstrap/esm/PageItem";

const Navigation = ({setModal,setSearch,changeToLogin,savedPassword,setChangeToLogin,
    savedEmail,setSavedEmail,email}) => {


    const openModal = () =>{
        setModal(1);
        console.log('!!'); 
    }

    const searchOpen = () => {
        setSearch(true);
    }

    const navigate = useNavigate();

    const goToRecruit = () => {
        navigate('/recruit');
    }  

    const [dropdownMenu, setDropDownMenu] = useState(false);

    // const toggle = () => {
    //     setDropDownMenu(!dropdownMenu);
    // }

    // const logout=()=>{
    //     localStorage.removeItem("email");
    //     setSavedEmail(localStorage.getItem("email"));
    // }

    

return (
<header>
    
    <div className="headwrap">
        <div className="left">
            <ImgComponent class={"ham"} src={"ham.webp"} />
            <Link to={"/"} className="logo">wanted</Link>
        </div>
        <ul className="menu">
            <li onClick={goToRecruit}><a>채용</a></li>
            <li><a href="#">이벤트</a></li>
            <li><a href="#">직군별 연봉</a></li>
            <li><a href="#">이력서</a></li>
            <li><a href="#">커뮤니티<span>New</span></a></li>
            <li><a href="#">프리랜서</a></li>
            <li><a href="#">AI 합격예측<span>Beta</span></a></li>
        </ul>
        {(savedPassword && (savedEmail === localStorage.getItem("email"))) ? 
        <div className="right success">
            <div className="login">
                <FontAwesomeIcon icon={faSearch} className="search" onClick={searchOpen}  />
                
                <div className="bellbox">
                    <FontAwesomeIcon icon={faBell} className="bell"  />
                    <span>N</span>
                </div>
                <div className="navprofile" onClick={()=>setDropDownMenu(!dropdownMenu)}>
                    <div className="navprofile_c">
                        <img src="https://k.kakaocdn.net/dn/chOGWm/btrJ7se3l3K/eeQiZuGgc7rBHKj9RBRFk1/img_110x110.jpg" alt="" />
                    </div>
                    <span>N</span>
                    {dropdownMenu && <div className="dropdownMenu">
                        <ul>
                            <li><a href="">My 원티드</a></li>
                            <li><a href="">프로필</a></li>
                            <li><a href="">지원 현황</a></li>
                            <li><a href="">제안받기 현황</a></li>
                            <li><a href="">좋아요</a></li>
                            <li><a href="">북마크</a></li>
                            <li><a href="">추천</a></li>
                            <li><a href="">포인트</a></li>
                            <li><button onClick={()=>{
                                localStorage.removeItem("email");
                            }}>로그아웃</button></li>
                        </ul>
                    </div>}
                </div>
            </div>
            <div className="service">기업 서비스</div>
        </div> 
        : 
        <div className="right">
            <div className="login">
                <FontAwesomeIcon icon={faSearch} className="search" onClick={searchOpen}  />
                <span className="show" onClick={openModal}>회원가입/로그인</span>
                <span className="none" onClick={openModal}>회원가입하기</span>
                <span className="dots">•••</span>
            </div>
            <div className="service">기업 서비스</div>
        </div>}
        
        
    </div>

</header>
)
}

export default Navigation;