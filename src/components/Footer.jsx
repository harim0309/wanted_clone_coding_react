import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer_wrap">
        <div className="up">
            <div className="left">
                <img src="../img/logo.webp" alt=""/>
                <ul>
                    <li><a href="#">기업소개</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보 처리방침</a></li>
                    <li><a href="#">고객센터</a></li>
                </ul>
            </div>
            <div className="right">
                <img src="../img/insta.webp" alt=""/>
                <img src="../img/youtube_black.webp" alt=""/>
                <img src="../img/facebook.webp" alt=""/>
                <img src="../img/blog.webp" alt=""/>
                <img src="../img/chat.webp" alt=""/>
                <img src="../img/icon.webp" alt=""/>
                <img src="../img/apple.webp" alt=""/>
                <img src="../img/google.webp" alt=""/>
            </div>
        </div>
        <div className="down">
            <div className="left">
                <p>(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147<br />
                    유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021
                    | 02-539-7118<br />
                    © Wantedlab, Inc.</p>
            </div>
            <div className="right">
                <img src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt=""/>
                <select>
                    <option value="kr">한국(한국어)</option>
                    <option value="kr">日本 (日本語)</option>
                    <option value="kr">Worldwide (English)</option>
                    <option value="kr">Singapore (English)</option>
                </select>
                <FontAwesomeIcon icon={faCaretDown} className='arrowDownicon2' />
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer