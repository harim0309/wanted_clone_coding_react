import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/accordion.scss';
// import '../style/header.scss'
import '../style/Detail01.scss';
import '../style/footer.scss';
import Footer from '../components/Footer';
import BookmarkContent from '../components/BookmarkContent';
import bookmarkjson from "../json/bookmarkcontent.json";
import DetailMain from '../components/Detail/DetailMain';
import { Link, useNavigate } from "react-router-dom";



const Detail01 = ({setModal}) => {


  return (
    <div id="DetailWrap">
        <DetailMain />
        <div className="detail_recom">
            <h2>이 포지션을 찾고 계셨나요?</h2>
            <ul className="contents02">
            {
                bookmarkjson.content.map((cont)=>(
                    <Link to={`${cont.id}`} >
                    <BookmarkContent 
                    key={cont.id}
                    txt1={cont.txt1}
                    txt2={cont.txt2}
                    txt3={cont.txt3}
                    txt4={cont.txt4}
                    txt5={cont.txt5}
                    img={cont.img}
                    />
                    </Link>
                ))
            }
            </ul>
        </div>
        <Footer />
    </div>

  )
}

export default Detail01;