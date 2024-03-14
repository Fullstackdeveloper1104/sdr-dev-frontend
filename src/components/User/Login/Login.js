import React, {useEffect} from 'react';
import './css/app.css';
import './css/vendor.css'
import {toast, ToastContainer} from "react-toastify";
import Logo from '../../../assets/header/login/img/logo.png';
import LogoToX from '../../../assets/header/login/img/logo@2x.png';
import LogoTo from '../../../assets/header/login/img/logo-2.png';
import LogoToXX from '../../../assets/header/login/img/logo-2@2x.png';
import Cookies from "js-cookie";
const Login = () => {
    useEffect(() => {
        fetch('/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: '',
                password: ''
            })
        }).then(response => {
            if (response.status === 200) {
                // check isManager cookie

                response.json().then(data => {
                    if(data.isManager){
                        window.location.href = '/mdashboard';

                    }
                    else{
                        window.location.href = '/caller-dashboard';
                    }
                })



            }
        })
    }, []);
    const handleLogin = (event) => {
        // Handle login logic
        event.preventDefault();
        fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target.email.value,
                password: event.target.password.value
            })
        }).then(response => {
            if (response.status === 200) {
                toast.success('Login successful',
                    {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined
                    });
                window.location.href = '/caller-dashboard';


            }
            else if (response.status === 302){
                window.location.href = '/mdashboard';
            }
            else {
                toast.error('Login failed', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined
                });
            }
        })
    };

    return (

        <div>
            <ToastContainer/>
            {/*// <!-- HEADER :: START-->*/}
            <nav className="header" id="header">
                <div className="c-grid-fluid">
                    <div className="header__wrapper">
                        <div>
                            <div className="logo logo--header"><a class="logo__link" href="/"><img
                                className="logo__image" src={Logo}
                                alt="Logotype"/></a></div>
                        </div>
                        {/*<div>*/}
                        {/*    <nav className="header__nav"><a href="#">IQ Accelerate</a><a href="#">IQ Boost</a><a*/}
                        {/*        href="#">IQ Scale</a><a href="#">Pricing</a><a href="#">About</a></nav>*/}
                        {/*</div>*/}
                        <div>
                            {/*<div className="header__btn c-btn__wrapper"><a class="c-btn" href="#">Book a Demo</a></div>*/}
                            {/*<div className="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">*/}
                            {/*    <div className="hamburger-box">*/}
                            {/*        <div className="hamburger-inner"></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </nav>
            {/*// <!-- HEADER :: END-->*/}
            <main class="main main--start p-sign-in">
                {/*// <!-- SECTION :: START-->*/}
                <section class="sign" id="sign">
                    <div class="c-grid">
                        <div class="section__wrapper">
                            <div class="c-section" data-align="center">
                                <div class="c-section__head">
                                    <div class="logo logo--header"><a class="logo__link" href="/"><img
                                        class="logo__image" src={LogoTo}
                                        alt="Logotype"/></a></div>
                                </div>
                                <div class="c-section__body">
                                    <h5 class="c-section__title">Log in to your account</h5>

                                    <form class="c-form" action="" method="" autocomplete="off" onSubmit={handleLogin}>
                                        <div class="c-form__field">
                                            <label class="c-form__label" for="email">Email</label>
                                            <input class="c-form__input" type="text" name="email" id="email"
                                                   placeholder="Enter your email address" required/>
                                        </div>
                                        <div class="c-form__field">
                                            <label class="c-form__label" for="password">Password</label>
                                            <input class="c-form__input" type="password" name="password" id="password"
                                                   placeholder="Enther your password..." required/>
                                        </div>
                                        {/*<div class="c-form__field c-form__field--link"><a href="#">Forgot password?</a>*/}
                                        {/*</div>*/}
                                        <div class="c-form__field c-form__field--btn">
                                            <div class="c-btn__wrapper"><input class="c-btn" type={"submit"}
                                                                               data-btn-color="blue"
                                                                               data-btn-size="full" data-btn-fw="600"
                                                                               data-btn-round="half" value={"Log in"}/>
                                            </div>
                                        </div>
                                    </form>
                                    {/*<p class="sign__link">Don't have an account? <a href="/register">Sign up</a></p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*// <!-- SECTION :: END-->*/}
            </main>
            {/*// <!-- FOOTER :: START-->*/}
            <footer class="footer" id="footer">
                <div class="c-grid">
                    <div class="footer__wrapper"></div>
                </div>
            </footer>
            {/*// <!-- FOOTER :: END-->*/}
        </div>
    );
};

export default Login;
