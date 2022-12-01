import React ,{Component, useState, useEffect} from 'react';
import Detail01 from './pages/Detail01';
import Index from './pages/Index';
import Recruit from './pages/Recruit';
import { BrowserRouter, Routes, Route, useNavigate  } from "react-router-dom";
import LoginModal from './pages/LoginModal';
import Navigation from './components/Navigation';
import SearchModal from './pages/SearchModal';
import SearchResult from './pages/SearchResult';
import BookmarkResult from './pages/BookmarkResult';
import Alert from 'react-bootstrap/Alert';
import '../src/style//header.scss';
import '../src/style/alert.scss';
import '../src/style/media900.scss';

// import loadable from "@loadable/component";

// const Main = loadable(() => import("./pages/Index"));

function App() {
  const [modal, setModal] = useState(0);
  const [search, setSearch] = useState(false);
  const [changeToLogin, setChangeToLogin] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");
  const [savedPassword, setSavedPassword] = useState("");
  const [email, setEmail] = useState('');

  useEffect(()=>{
    console.log(savedPassword);
    console.log(localStorage.getItem("password"));
  },[savedPassword])

  // const goToLogin = () => {
  //   setChangeToLogin(true);
  //   localStorage.setItem("password",password);
  //   setSavedPassword(localStorage.getItem("password"));
  // }

  const [show, setShow] = useState(false);

  return (
    <>
    <BrowserRouter>
        <Navigation setModal={setModal} setSearch={setSearch} changeToLogin={changeToLogin} setSavedEmail={setSavedEmail} savedEmail={savedEmail} savedPassword={savedPassword} setSavedPassword={setSavedPassword} email={email} show={show} />
        {modal!=0 && <LoginModal modal={modal} loginclass={'login_modal_wrap'} setModal={setModal} setSavedEmail={setSavedEmail} savedEmail={savedEmail} setChangeToLogin={setChangeToLogin} savedPassword={savedPassword} setSavedPassword={setSavedPassword} email={email} setEmail={setEmail} show={show} setShow={setShow}/> }
        {search && <SearchModal searchclass={'searchmodalWrap'} closeSearch={setSearch} /> }
         <Routes>
           <Route path={"/"} element={<Index/>} />
           <Route path={"/recruit"} element={<Recruit />} />
           <Route path={"/recruit/:id"} element={<Detail01/>} />
           <Route path={"/searchresult"} element={<SearchResult/>} />
           <Route path={"/bookmarks"} element={<BookmarkResult/>} />
         </Routes>
         <Alert show={show}>
          회원가입이 완료되었습니다!
        </Alert>
    </BrowserRouter>
    
    </>


  );
}

export default App;
