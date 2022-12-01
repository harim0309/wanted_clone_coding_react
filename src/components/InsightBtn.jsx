import React from 'react';

/**
 * Name : InsightBtn
 * Desc : 나에게 필요한 커리어 인사이트 메뉴 버튼 Component
 * Property
 *  - txt : 버튼 내용
 **/

const InsightBtn =(props) => {
  return (
    <p className="menu_scroll_button">{props.txt}</p>
  )
}

export default InsightBtn;