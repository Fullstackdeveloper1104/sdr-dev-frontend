import React, { useState } from 'react'
import prospectiqlogo from "../assets/img/prospectiq-logo.svg";
// import footerlogo from "../assets/img/iqconnect.png"
import footerlogo from "../assets/img/acccelarateIQ.png"
import { useNavigate } from 'react-router-dom';
const Dashboard = ({children}) => {

    const navigate = useNavigate();

	const [show , setshow] = useState(false);
  return (
    <div className="h-full text-primary">
		<div className="app flex h-full flex-col lg:flex-row">
			{/* <!-- Header / Sidebar --> */}
			<header
				className="w-full bg-primary bg-hero bg-cover bg-center bg-no-repeat py-4 lg:h-[100vh] lg:w-72 lg:py-8">
				<div className="flex h-full justify-between gap-10 px-5 lg:flex-col">
					<a href="" className="block">
						<img
							src={prospectiqlogo}
							alt="ProspectIQ Logo"
							className="h-8 lg:h-10" />
					</a>

					<ul className="hidden flex-1 space-y-1.5 lg:block">
						<li>
							<a
								className="group cursor-pointer flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
								onClick={()=>navigate("/mdashboard")}>
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
										<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
										<path d="M9 22V12h6v10" />
									</svg>
								</span>
								<span>Manager Dashboard</span>
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
						<a href="#" target='_blank'>
							<img src={footerlogo} alt="" className="h-5 ml-3 mt-2 cursor-pointer"/>
						</a>
					</div>

					{/* <!-- Navigation Toggle --> */}
					<button
						type="button"
						onClick={() => setshow(!show)}
						className="text-white/70 transition hover:text-white lg:hidden"
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
									className="h-8 lg:h-10"/>
							</a>
						</div>
						<nav
							className="hs-accordion-group mt-3 flex w-full flex-1 flex-col flex-wrap"
							data-hs-accordion-always-open>
							<ul className="flex-1 space-y-1.5">
								<li>
									<a
										className="group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white"
										onClick={()=>navigate("/")}>
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
													d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
												<path d="M9 22V12h6v10" />
											</svg>
										</span>
										<span>Manager Dashboard</span>
									</a>
                                  
								</li>
							</ul>
						</nav>
						<div className="">
							<img src="assets/img/iqconnect.png" alt="" className="h-5" />
						</div>
					</div>
				</div>
			</header>

			{/* <!-- Main --> */}
			<main
				className="h-full flex-1 overflow-y-auto overflow-x-hidden bg-primary bg-hero bg-cover bg-center bg-no-repeat">
							<div
					class=" h-[100vh] overflow-y-auto overflow-x-hidden rounded-t-2xl bg-neutral-100 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16">
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

export default Dashboard