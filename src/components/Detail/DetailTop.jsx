import React from 'react';
import bookmarkcontent from '../../json/bookmarkcontent.json';


const DetailTop = ({pageId}) => {

    const company = bookmarkcontent.content.filter(
        (company) => company.id === pageId
      )[0];

  return (
    <div className="txt1">
                    <h2>{company.txt1}</h2>
                    <div className="txt1_wrap">
                        <h6>{company.txt2}</h6>
                        <div className="res">응답률 {company.txt3}</div>
                        <span>{company.txt4}</span>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">#인원급성장</a></li>
                            <li><a href="#">#50명이하</a></li>
                            <li><a href="#">#설립3년이하</a></li>
                            <li><a href="#">#스톡옵션</a></li>
                            <li><a href="#">#스타트업</a></li>
                            <li><a href="#">#워크샵</a></li>
                            <li><a href="#">#간식</a></li>
                            <li><a href="#">#건강검진</a></li>
                            <li><a href="#">#IT,컨텐츠</a></li>
                        </ul>
                    </div>
                </div>
  )
}

export default DetailTop