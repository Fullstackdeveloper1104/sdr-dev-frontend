import React, {useState} from 'react'
import prospectiqlogo from "../assets/img/prospectiq-logo.svg";
import footerlogo from "../assets/img/acccelarateIQ.png"
import {useNavigate} from 'react-router-dom';
import Lottie from "react-lottie-player";
import loti from "../data/lotte.json";
// import loti from "../../data/lotte.json";
import Cookies from 'js-cookie';

const ManagerDashboard = ({children,websiteUrl}) => {

    const navigate = useNavigate();

    const [show, setshow] = useState(false);
    return (
        <div className="h-full text-primary">
            <div className="app flex h-full flex-col lg:flex-row">
                {/*<div className="absolute inset-0">*/}
                {/*	<Lottie play*/}
                {/*			style={{width: "100%", height: "100%"}} animationData={loti}></Lottie>*/}

                {/*</div>*/}
                {/* <!-- Header / Sidebar --> */}
                <header
                    className="w-full bg-primary bg-hero bg-cover bg-center bg-no-repeat py-4 lg:h-[100vh] lg:w-72 lg:py-8">
                    <div className="flex h-full justify-between gap-10 px-5 lg:flex-col">
                        <a href="" className="block">
                            <img
                                src={prospectiqlogo}
                                alt="ProspectIQ Logo"
                                className="h-8 lg:h-10"/>
                        </a>

                        <ul className="hidden flex-1 space-y-1.5 lg:block cursor-pointer">

                            <li className=''>
                                <a
                                    className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"

                                    onClick={() => {
                                        navigate("/caller-dashboard")
                                    }}
                                >
								<span className="text-secondary transition group-hover:text-white">
									<svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24">
										<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
										<path d="M9 22V12h6v10"/>
									</svg>
								</span>
                                    <span>Caller Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"

                                    onClick={() => navigate("/call-processing")}
                                >
								<span className="text-secondary transition group-hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    class="h-5 w-5">
										<path
                                            d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm8.426 9.23h-2.322a6.163 6.163 0 0 0-5.335-5.334V1.574a8.474 8.474 0 0 1 7.657 7.657Zm-9.195 0H5.45a4.624 4.624 0 0 1 3.78-3.78v3.78Zm0 1.54v3.78a4.624 4.624 0 0 1-3.781-3.78h3.78Zm1.538 0h3.781a4.624 4.624 0 0 1-3.78 3.78v-3.78Zm0-1.54V5.45a4.624 4.624 0 0 1 3.781 3.78h-3.78ZM9.231 1.575v2.322a6.164 6.164 0 0 0-5.335 5.335H1.574a8.474 8.474 0 0 1 7.657-7.657ZM1.574 10.77h2.322a6.163 6.163 0 0 0 5.335 5.335v2.322a8.475 8.475 0 0 1-7.657-7.657Zm9.195 7.657v-2.322a6.163 6.163 0 0 0 5.335-5.335h2.322a8.474 8.474 0 0 1-7.657 7.657Z"/>
									</svg>
								</span>
                                    <span>Call Processing</span>
                                </a>
                            </li>
                        </ul>

                        <div className="hidden lg:block">
                            <a
                                className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"

                                onClick={() => {
                                    fetch('/logout', {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }).then(response => {
                                        if (response.status === 200) {
                                            // Cookies.remove('token');
                                            navigate("/login/");
                                        }
                                    })
                                }}
                            >
								<span className="text-secondary transition group-hover:text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
</svg>

								</span>
                                <span>Sign Out</span>
                            </a>
                            <a href={websiteUrl} target='_blank'>
                                <img src={footerlogo} alt="" className="h-5 ml-3 mt-2 cursor-pointer"/>
                            </a>
                        </div>

                        {/* <!-- Navigation Toggle --> */}
                        <button
                            type="button"
                            onClick={() => setshow(!show)}
                            className="text-white/70 transition hover:text-white lg:hidden cursor-pointer"
                            data-hs-overlay="#mobile-sidebar"
                            aria-controls="mobile-sidebar"
                            aria-label="Toggle navigation">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg className="h-9 w-9 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    fill-rule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                        {/* <!-- End Navigation Toggle --> */}
                    </div>
                           {/* <!-- Sidebar Mobile  --> */}
                    <div
                        id="mobile-sidebar"
                        className={`hs-overlay fixed bottom-0 start-0 top-0 z-[60]  w-64  transform overflow-y-auto bg-primary transition-all duration-300 ${show ? 'translate-x-0' : '-translate-x-full'} [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2`}>
                        <div className="flex h-full flex-col justify-between gap-5 p-5">
                            <div className="">
                                <a href="" className="block">
                                    <img
                                        src={prospectiqlogo}
                                        alt="ProspectIQ Logo"
                                        className="h-8 lg:h-10 cursor-pointer"/>
                                </a>
                            </div>
                            <nav
                                className="hs-accordion-group mt-3 flex w-full flex-1 flex-col flex-wrap"
                                data-hs-accordion-always-open>
                                <ul className="flex-1 space-y-1.5">
                                    <li>
                                        <a
                                            className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
                                            onClick={() => {
                                                navigate("/caller-dashboard")
                                            }}>
										<span
                                            className="text-secondary transition group-hover:text-white">
											<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="h-5 w-5"
                                                viewBox="0 0 24 24">
												<path
                                                    d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
												<path d="M9 22V12h6v10"/>
											</svg>
										</span>
                                            <span>Caller Dashboard</span>
                                        </a>
                                        <li>
                                            <a
                                                className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
                                                onClick={() => navigate("/call-processing")}>
										<span
                                            className="text-secondary transition group-hover:text-white">
											<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="h-5 w-5"
                                                viewBox="0 0 24 24">
												<path
                                                    d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
												<path d="M9 22V12h6v10"/>
											</svg>
										</span>
                                                <span>Call Processing</span>
                                            </a>
                                        </li>

                                    </li>
                                </ul>
                            </nav>
                            <div className="">
                                <a
                                    className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"

                                    onClick={() => {
                                        fetch('/logout', {
                                            method: 'GET',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }).then(response => {
                                            if (response.status === 200) {
                                                // Cookies.remove('token');
                                                navigate("/login/");
                                            }
                                        })
                                    }}
                                >
								<span className="text-secondary transition group-hover:text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/>
</svg>

								</span>
                                    <span>Sign Out</span>
                                </a>
                                <img src={footerlogo} m alt="" className="h-5 ml-3 mt-2"/>
                            </div>
                        </div>
                    </div>
                </header>

                {/* <!-- Main --> */}
                <main
                    className="h-full flex-1 overflow-y-auto overflow-x-hidden bg-primary bg-hero bg-cover bg-center bg-no-repeat">
                    <div
                        class=" h-[100vh] flex flex-col overflow-y-auto overflow-x-hidden rounded-t-2xl bg-neutral-100 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16">
                        {children}
                    </div>
                </main>
            </div>

            {/* <script src="assets/js/preline.js"></script>
		<script src="assets/js/tiny-slider.js"></script>
		<script src="assets/js/aos.min.js"></script>
		<script src="assets/js/scripts.js"></script> */}
        </div>
    )
}

export default ManagerDashboard