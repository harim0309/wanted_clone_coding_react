import React from 'react';
// import '../style/header.scss'
import '../style/index.scss';
import '../style/footer.scss';
import Navigation from '../components/Navigation';
import SlideComponent from '../components/SlideComponent';
import InsightContent from '../components/InsightContent';
import ArticleContent from '../components/ArticleContent';
import BodyHeader from '../components/BodyHeader';
import VodContent from '../components/VodContent';
import EventContent from '../components/EventContent';
import RecruitContent from '../components/RecruitContent';
import Footer from '../components/Footer';
import MenuScroll from '../components/MenuScroll';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
import insightjson from "../json/insightcontent.json";
import articlejson from "../json/articlecontent.json";
import vodjson from "../json/vodcontent.json";
import { Link, useNavigate } from "react-router-dom";


const Index = () => {

  return (
    <div className='wrap'>
      {/* <Navigation /> */}
      <SlideComponent />
      <div className="InsightWrap">
            <div className="title">
                <h2>나에게 필요한 커리어 인사이트</h2>
            </div>
            <MenuScroll />
            <ul className="contents">
            {
                insightjson.content.map((insight)=>(
                    <Link to={`${insight.id}`} >
                    <InsightContent 
                    key={insight.id}
                    txt1={insight.txt1}
                    txt2={insight.txt2}
                    name={insight.name}
                    img1={insight.img1}
                    img2={insight.img2}
                    style={insight.style}
                    />
                    </Link>
                ))
            }
            </ul>
            <div className="more">
                <p>더 많은 콘텐츠 보기 </p>
            </div>
        </div>
        <hr className='shorthr'/>
        <div className="body2">
            <BodyHeader title={'3분 만에 읽는 Wanted + 아티클'} sub={'아티클 전체보기'} />
            <ul className="contents">
                {
                    articlejson.content.map((article)=>(
                        <ArticleContent 
                            key={article.id}
                            txt1={article.txt1}
                            txt2={article.txt2}
                            img={article.img}
                        />
                    ))
                }
            </ul>
        </div>
        <hr className='shorthr'/>
        <div className="body2">
            <BodyHeader title={'직장인을 위한 Wanted + VOD클'} sub={'VOD 전체보기'} />
            <ul className="contents">
                {
                    vodjson.content.map((vod)=>(
                        <VodContent 
                            key={vod.id}
                            txt1={vod.txt1}
                            txt2={vod.txt2}
                            txt3={vod.txt3}
                            img={vod.img}
                        />
                    ))
                }
            </ul>
        </div>
        <div className="recom">
            <p>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀 </p>
        </div>
        <div className="body2">
            <BodyHeader title={'커리어 성장을 위한 맞춤 이벤트'} sub={'이벤트 전체보기'} />

            <ul className="contents">
                <EventContent txt1={'스터디살롱 : CS/CX의 실무 꿀팁과 Next Career'} txt2={'2022.11.24(목)'} img={'event01'} />
                <EventContent txt1={'10월 원디트살롱(평가보상편)'} img={'event02'} />
            </ul>
        </div>

        <div className='article'>
            <div className="banner">
                <div className="left">
                    <h1><strong>wanted +</strong> 구독해야 하는 이유</h1>
                    <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                    <div className="btn">첫 구독 0월신청하기</div>
                </div>
                <img className="right" src="../img/banner.webp" />
            </div>
        </div>

        <div className="info">
            <h2>채용 정보를 찾고 계셨나요?</h2>
            <div className="boxes">
                <RecruitContent txt={'채용공고'} icon={faSearch} />
                <RecruitContent txt={'내 프로필'} icon={faUser} />
                <RecruitContent txt={'매치업'} icon={faBuilding} />
                <RecruitContent txt={'직군별 연봉'} icon={faSlidersH} />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Index;