import React from 'react';
import {useHistory} from "react-router-dom"

const {Kakao} = window;
// const history = useHistory();

const Kakologin = ({setShow}) => {

    // let localStorage = window.localStorage;

    // const loginWithKakao = () => {
    //     Kakao.Auth.login({
    //         success: function(authObj) {
    //             fetch('971e5cc1f2694db6a2e0127b745a6405', {
    //                 method: "GET",
    //                 header: {
    //                     Authorization: authObj.client_id,
    //                 },
    //             })
    //             .then((res)=> res.json())
    //             .then((res) => {
    //                 console.log(res.client_id);
    //                 // localStorage.setItem("Kakao_token", res.access_token);
    //                 localStorage.setItem("email",res.client_id);
    //                 if(res.client_id){
    //                     alert("Successfully logged in!")
    //                     setShow(true);
    //                     setTimeout(()=>{
    //                       setShow(false);
    //                     }, 2000)
    //                 }
    //             })
    //         }
    //     })
    // }
    // const src = "https://developers.kakao.com/sdk/js/kakao.min.js"

    // let kakaoScript = util.checkScript('kakao', src, loginWithKakao)

    function loginWithKakao() {
        if (!Kakao.isInitialized()) {
            Kakao.init(process.env.Kakao_Client_Id)
        }

        Kakao.Auth.login({
            success: (_) => {
                Kakao.API.request({
                    url: '/v2/user/me',
                    data: {
                        property_keys: ["kakao_account.email", "kakao_account.profile"]
                    },
                    success: (res) => {
                        // res.kakao_account.email
                        // res.kakao_account.profile.nickname
                        // res.kakao_account.profile.profile_image_url
                        console.log( res.kakao_account.email )
                        // util.removeScript(kakaoScript)
                        // return res.kakao_account
                        localStorage.setItem("email",res.kakao_account.email);
                        console.log('이메일은'+ res.kakao_account.email);
                    },
                    fail: (err) => {
                        alert(`개인정보를 가져올 수 없습니다. ${JSON.stringify(err)}`)
                    }
                })
            },
            fail: (err) => {
                alert(`도메인을 확인해주세요. ${JSON.stringify(err)}`)
            },
        });
    }
    


return (
<li onClick={()=>loginWithKakao()}><a href="#">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21">
                <path fill="#000" fillRule="nonzero" d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538">
                </path>
            </svg></div>
        <p>Kakao</p>
    </a></li>
)
}

export default Kakologin;