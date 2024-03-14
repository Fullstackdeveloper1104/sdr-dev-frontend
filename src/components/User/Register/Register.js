import React from "react";
import './css/app.css';
import './css/vendor.css'
import { toast, ToastContainer } from "react-toastify";
import Logo from '../../../assets/header/login/img/logo.png';
import LogoToX from '../../../assets/header/login/img/logo@2x.png';
import LogoTo from '../../../assets/header/login/img/logo-2.png';
import LogoToXX from '../../../assets/header/login/img/logo-2@2x.png';
const Register = () => {
    const handleRegister = (event) => {
        // Match passwords
        if (event.target.password.value !== event.target.confirm_password.value) {
            toast.error('Passwords do not match', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined
            })
            return;
        }
        // Handle register logic
        event.preventDefault();
        // Add your register logic here
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: event.target.email.value,
                password: event.target.password.value,
                confirm_password: event.target.confirm_password.value
            })
        }).then(response => {
            if (response.status === 200) {
                window.location.href = '/login';
            } else {
                toast.error('Registration failed', {
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
            <ToastContainer />
            {/*// <!-- HEADER :: START-->*/}
            <nav class="header" id="header">
                <div class="c-grid-fluid">
                    <div class="header__wrapper">
                        <div>
                            <div class="logo logo--header"><a class="logo__link" href="/">
                                <img class="logo__image"
                                src={Logo}
                                alt="Logotype" /></a>
                            </div>
                        </div>
                        {/* <div>
                            <nav class="header__nav"><a href="#">IQ Accelerate</a><a href="#">IQ Boost</a><a href="#">IQ
                                Scale</a><a href="#">Pricing</a><a href="#">About</a></nav>
                        </div>
                        <div>
                            <div class="header__btn c-btn__wrapper"><a class="c-btn" href="#">Book a Demo</a></div>
                            <div class="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">
                                <div class="hamburger-box">
                                    <div class="hamburger-inner"></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
            {/*// <!-- HEADER :: END-->*/}
            <main class="main main--start p-sign-up">
                {/*// <!-- SECTION :: START-->*/}
                <section class="sign" id="sign">
                    <div class="c-grid">
                        <div class="section__wrapper">
                            <div class="c-section" data-align="center">
                                <div class="c-section__head">
                                    <div class="logo logo--header"><a class="logo__link" href="/"><img
                                        class="logo__image"
                                        src={LogoTo}
                                        alt="Logotype" /></a>
                                    </div>
                                </div>
                                <div class="c-section__body">
                                    <h5 class="c-section__title">Sign up</h5>
                                    <p class="c-section__desc">Fill in your details below and continue signing up</p>
                                    <form class="c-form" action="" method="" autocomplete="off" onSubmit={handleRegister}>
                                        <div class="c-form__group">
                                            <div>
                                                <div class="c-form__field">
                                                    <label class="c-form__label" for="first_name">First name*</label>
                                                    <input class="c-form__input" type="text" name="first_name"
                                                        id="first_name" placeholder="Type your first name..."
                                                        required />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="c-form__field">
                                                    <label class="c-form__label" for="last_name">Last name*</label>
                                                    <input class="c-form__input" type="text" name="last_name"
                                                        id="last_name"
                                                        placeholder="Type your last name..." required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="c-form__field">
                                            <label class="c-form__label" for="email">Email</label>
                                            <input class="c-form__input" type="text" name="email" id="email"
                                                placeholder="Enter your email address" required />
                                        </div>
                                        <div class="c-form__group">
                                            <div>
                                                <div class="c-form__field">
                                                    <label class="c-form__label" for="password">Password</label>
                                                    <input class="c-form__input" type="password" name="password"
                                                        id="password" placeholder="Enter your password..." required />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="c-form__field">
                                                    <label class="c-form__label" for="confirm_password">Confirm
                                                        password*</label>
                                                    <input class="c-form__input" type="password" name="confirm_password"
                                                        id="confirm_password" placeholder="Retype your password..."
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="c-form__field c-form__field--btn">
                                            <div class="c-btn__wrapper"><input class="c-btn" type={"submit"} data-btn-color="blue"
                                                data-btn-size="full" data-btn-fw="600"
                                                data-btn-round="half" value={"Create account"} />
                                            </div>
                                        </div>
                                        <p class="sign__link">Already have an account? <a href='/login'>Sign in</a></p>
                                        <div class="c-form__field c-form__field--info">
                                            <p class="c-section__desc" style={{padding:0}}>By clicking “Create account” you agree to our <a
                                                href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
                                        </div>
                                    </form>
                                </div>
                                <div class="c-section__footer">
                                    <p class="c-section__info">Having trouble? Contact us at <a
                                        href='#'>support@prospectiq.ai</a></p>
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
export default Register;