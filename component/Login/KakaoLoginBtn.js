import React, { Component, } from 'react';

class KakaoLogin extends Component {
    componentDidMount() {
        const Kakao = window.Kakao;
        const jsKey = 'e141dd9b01b0c32c070a1c00b348eb54'
        Kakao.init(jsKey);
        // 카카오 로그인 버튼을 생성합니다.
        Kakao.Auth.createLoginButton({
            container: '#kakao-login-btn',
            success: function (authObj) {
                // 로그인 성공시, API를 호출합니다.
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function (res) {
                        console.log(JSON.stringify(res));
                    },
                    fail: function (error) {
                        console.log(JSON.stringify(error));
                    }
                });
            },
            fail: function (err) {
                console.log(JSON.stringify(err));
            }
        });
    }


    render() {
        return (
            <div>
                <a id="kakao-login-btn">.</a>
                <a href="http://developers.kakao.com/logout">.</a>
            </div>
        );
    }
}


export default KakaoLogin;