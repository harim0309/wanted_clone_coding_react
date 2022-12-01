import React from 'react';
import ModalHeader from '../components/ModalHeader';
import '../style/SignUpModal.scss';
import { useEffect,useState,useRef } from 'react';
import styled from 'styled-components';

const SignUpModal = ({signupclass,setModal,setChangeToLogin,savedPassword,setSavedPassword,setShow,show}) => {

  //   const data = [
  //       {id: 0, title: '개인정보 수집 및 이용 동의(필수)'},
  //       {id: 1, title: '이벤트 소식 등 알림 정보 받기'},
  //     ];

      
  // // 체크된 아이템을 담을 배열
  // const [checkItems, setCheckItems] = useState([]);
  // const [checkIs, setCheckIs] = useState(false);

  // // 체크박스 단일 선택
  // const handleSingleCheck = (checked, id) => {
  //   if (checked) {
  //     // 단일 선택 시 체크된 아이템을 배열에 추가
  //     setCheckItems(prev => [...prev, id]);
  //   } else {
  //     // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
  //     setCheckItems(checkItems.filter((el) => el !== id));
  //     setCheckIs(false);
  //   }
  // };

  // // 체크박스 전체 선택
  // const handleAllCheck = (checked) => {
  //   if(checked) {
  //     // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
  //     const idArray = [];
  //     data.forEach((el) => idArray.push(el.id));
  //     setCheckItems(idArray);
  //     setCheckIs(true);
  //   }
  //   else {
  //     // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
  //     setCheckItems([]);
  //     setCheckIs(false);
  //   }
  // }

  const closeModal = () => {
    setModal(0);
    console.log('!!!');  
    setShow(true);
    setTimeout(()=>{
      setShow(false);
    }, 2000)
};



// 유효성 검사

const [name, setName] = useState('');
const [num, setNum] = useState('');
const [password, setPassword] = useState('');
const [passwordConfirm, setPasswordConfirm] = useState('');

const [isName, setIsName] = useState(false);
const [isNum, setIsNum] = useState(false);
const [isPassword, setIsPassword] = useState(false);
const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

let localStorage = window.localStorage;

// useEffect(()=>{
//   console.log(savedPassword);
//   console.log(localStorage.getItem("password"));
// },[savedPassword])

// const goToLogin = () => {
//   setChangeToLogin(true);
//   localStorage.setItem("password",password);
//   setSavedPassword(localStorage.getItem("password"));
// }

// ============================================

const onChangeName = (e) => {
  const nameCurrent = e.target.value;
  setName(nameCurrent);
  if(nameCurrent.length < 2 || nameCurrent.length > 5) { 
    setIsName(false);
  }else{
    setIsName(true)
  }
}

const onNum = (e) => {
  const numRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  const numRegx2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  const numCurrent = e.target.value;
  setIsNum(numCurrent);
  if(!numRegex.test(numCurrent) && !numRegx2.test(numCurrent)){
    setIsNum(false);
  }else{
    setIsNum(true);
  }
}

const onChangePassword = (e) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
  const passwordCurrent  = e.target.value;
  setPassword(passwordCurrent);
  if(!passwordRegex.test(passwordCurrent)) { 
    setIsPassword(false);
  }else{
    setIsPassword(true)
  }
}

const onChangePasswordConfirm = (e) => {
  const passwordConfirmCurrent = e.target.value;
  setPasswordConfirm(passwordConfirmCurrent);
  if (password === passwordConfirmCurrent) {
    setIsPasswordConfirm(true)
  } else {
    setIsPasswordConfirm(false)
  }
}

const [notAllow, setNotAllow] = useState(true);

    // ================커서 자동 이동
    
    const nameRef = useRef(null);
    
    useEffect(() => {
      nameRef.current.focus();
    }, []);

    const [checkAll, setCheckAll] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);

  const onChange = (e) => {
    setCheckAll(e.target.checked);
    setFirstCheck(e.target.checked);
    setSecondCheck(e.target.checked);
  };

  const CheckIndividual = (e) => {
    if (!e.target.checked) {
      if (checkAll) {
        setCheckAll(false);
        if (e.target.name === 'agreeFirst') {
          setFirstCheck(e.target.checked);
        } else {
          setSecondCheck(e.target.checked);
        }
      } else {
        if (e.target.name === 'agreeFirst') {
          setFirstCheck(e.target.checked);
        } else {
          setSecondCheck(e.target.checked);
        }
      }
    } else {
      if (e.target.name === 'agreeFirst') {
        setFirstCheck(true);
        if (secondCheck) {
          setCheckAll(true);
          console.log(firstCheck, secondCheck);
        }
      } else {
        setSecondCheck(true);
        if (firstCheck) {
          setCheckAll(true);
          console.log(firstCheck, secondCheck);
        }
      }
    }
  };

  useEffect(() => {
    if(isName && isNum && isPassword && isPasswordConfirm && checkAll ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [isName , isNum , isPassword , isPasswordConfirm, checkAll]);
  
// =================================================alert

return (
<div className={signupclass}>
        
    <div className="signUp_modal">
        <ModalHeader txt1={'회원가입'} setModal2={closeModal} />
        <div className="modal_body">

            <label>이름</label>
            <input onChange={onChangeName} className={name.length > 0 && (`${isName ? 'name' : 'pwinputerror'}`)} type="text" placeholder="이름을 입력해주세요." ref={nameRef} />
            {/* {name.length > 0 && <p className={`${isName ? 'success' : 'error'}`}>2자리 이상 5자리 미만으로 입력해주세요.</p>} */}
            {name.length > 0 && <Pwtxt valid={isName}>2자리 이상 5자리 미만으로 입력해주세요.</Pwtxt>}

            <label className="phonenum">휴대폰 번호</label>
            <select>
                <option value="kr">대한민국 +82</option>
                <option value="kr">+81 Japan</option>
            </select>
            <div className="numBox">
                <input type="text" onChange={onNum}/>
                {/* <button className={`${isNum ? "numOn" : "numOff"}`}>인증번호 받기</button> */}
                <NumBtn valid={isNum}>인증번호 받기</NumBtn>
            </div>
            <input type="text" placeholder="인증번호를 입력해주세요." className="colored" />

            <label>비밀번호</label>
            <input className={password.length > 0 && (`${isPassword ? 'pwinput' : 'pwinputerror'}`)} type="password" placeholder="비밀번호를 입력해주세요." onChange={(e)=>{onChangePassword(e); setPassword(e.target.value)}} />
            {password.length > 0 && <Pwtxt valid={isPassword}>영문 , 숫자, 특수문자를 3가지 이상으로 조합하여 8자리 이상 입력해주세요.</Pwtxt>}

            <label className="repw">비밀번호 확인</label>
            <input type="password" className={passwordConfirm.length > 0 && (`${isPasswordConfirm ? 'repw_input' : 'pwinputerror'}`)} placeholder="비밀번호를 다시 한번 입력해주세요." onChange={onChangePasswordConfirm} />
            {passwordConfirm.length > 0 && <Pwtxt valid={isPasswordConfirm}>비밀번호가 일치하지 않습니다.</Pwtxt>}

            {/* <div className="all">
                <input type="checkbox" name="check" id="check_all" 
                onChange={(e) => handleAllCheck(e.target.checked)}
                // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                checked={checkItems.length === data.length ? true : false} checkIs={checkItems.length === data.length ? true : false}
                /><span>전체 동의</span>
            </div>

            {data?.map((data, key) => (
          <tr key={key}  className="one">
            <td>
              <input type='checkbox' name={`select-${data.id}`}  className="checkbox_txt1"
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                checked={checkItems.includes(data.id) ? true : false}  />
            </td>
            <td className='checkbox_txt'>{data.title} <span className="float">자세히</span></td>
            
          </tr>
        ))} */}

          <div className="all">
            
              <input
                type="checkbox"
                name="agreeAll"
                id="check_all"
                onChange={onChange}
                checked={checkAll}
              />
              <span>전체 동의</span>
           
          </div>
          <div className="check-individual">
            <div className="one">
              
                <input
                  type="checkbox"
                  name="agreeFirst"
                  className='checkbox_txt1'
                  checked={firstCheck}
                  onChange={CheckIndividual}
                />
                <div className='checkbox_txt'>
                <span>개인정보 수집 및 이용 동의 (필수)</span>
              
              
                <span className="float">자세히</span>
                </div>
            </div>
            <div className="one">
              
                <input
                  type="checkbox"
                  name="agreeSecond"
                  checked={secondCheck}
                  onChange={CheckIndividual}
                />
                <div className='checkbox_txt'>
                <span>이벤트 소식 등 알림 정보 받기</span>
             
              
              <span className="float">자세히</span></div>
             
            </div>
          </div>

            <div className="btn_div">
                <button 
                // className={`${(isName && isNum && isPassword && isPasswordConfirm) ? "signinbtnOn" : "signinbtn"}`}
                className='signinbtnOn' 
                onClick={
                  () => { setChangeToLogin(true);
                    localStorage.setItem("password",password);
                    setSavedPassword(localStorage.getItem("password"));
                  closeModal();}
                  }
                disabled={notAllow}>회원가입하기</button>
            </div>
        </div>
        
    </div>
    <div className="signUp_back" onClick={closeModal}></div>
    
</div>
)}

const NumBtn = styled.div`
    width: 117px;
    height: 50px;
    margin-top: 11px;
    margin-left: 10px;
    min-width: 117px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    font-weight: 700;
    border: 1px solid;
    border-color: ${props=>props.valid?"transparent":"#e1e2e3"};
    color: ${props=>props.valid?"#fff":"#ccc"};
    background-color: ${props=>props.valid?"#3366ff":"none"};
`

const Pwtxt = styled.p`
    margin: 6px 0 12px;
    font-size: 13px;
    display: ${props=>props.valid?"none":"block"};
    color: ${props=>props.valid?"#767676":"red"};

`

export default SignUpModal;