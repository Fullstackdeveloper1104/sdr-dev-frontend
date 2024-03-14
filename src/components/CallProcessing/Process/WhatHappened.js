import React from "react";

const WhatHappened = ({setIndex,setHappenedIndex}) => {
	// const updateDialOutcomes = () => {
	// 	fetch('/dialoutcomes', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			choice:'NoAns',
	// 			detail: 'testing'
	// 		})
	// 	}).then(response => {
	// 		if (response.status === 200) {
	// 			response.json().then(data => {
	// 				console.log(data)
	// 			})
	// 		}
	//
	// 	})
	// };
  return (
    <>
		<div class="mt-6 flex h-full flex-col justify-between gap-4">
							<div
								class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
								<h4 class="text-center text-lg font-semibold xl:text-xl">
									What happened on your call?
								</h4>

								<div class="cursor-pointer mt-8 flex flex-wrap items-center justify-center gap-4">
									<a
										onClick={()=>{setIndex(2);setHappenedIndex(0)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#5BE7CD] hover:bg-[#5BE7CD] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										Booked an appointment
									</a>
									<a
										 onClick={()=>{setIndex(2);setHappenedIndex(1)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#5BE7CD] hover:bg-[#5BE7CD] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										Scheduled a callback
									</a>
									<a
									 onClick={()=>{setIndex(7);setHappenedIndex(2)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#5BE7CD] hover:bg-[#5BE7CD] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										Send an email
									</a>
									{/*<a*/}
									{/*	onClick={()=>{setIndex(9);setHappenedIndex(3)}}*/}
									{/*	class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#5BE7CD] hover:bg-[#5BE7CD] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">*/}
									{/*	Got a referral*/}
									{/*</a>*/}
								</div>

								<div class="cursor-pointer mt-12 flex flex-wrap items-center justify-center gap-4">
									<a
										onClick={()=>{setIndex(15);setHappenedIndex(4)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#F55F6E] hover:bg-[#F55F6E] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										Hung up
									</a>
									<a
										onClick={()=>{setIndex(16);setHappenedIndex(5)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#F55F6E] hover:bg-[#F55F6E] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										Not interested
									</a>
								</div>

								<div class="cursor-pointer mt-4 flex flex-wrap items-center justify-center gap-4">
									<a
										onClick={()=>{setIndex(15);setHappenedIndex(6)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#F55F6E] hover:bg-[#F55F6E] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										No answer
									</a>
									<a
										onClick={()=>{setIndex(18);setHappenedIndex(7)}}
										class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-2 text-center font-medium text-accent-2 transition hover:border-[#F55F6E] hover:bg-[#F55F6E] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 2xl:px-6">
										Discard
									</a>
								</div>
							</div>
							<div class="cursor-pointer flex flex-wrap items-center justify-between gap-2">
								<a
									onClick={()=>setIndex(0)}
									class="inline-flex items-center gap-x-2 text-gray-800 transition hover:text-secondary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										class="h-4 w-4"
										viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
									</svg>
									Go Back
								</a>
							</div>
						</div>
	

   
    

    </>
  );
};

export default WhatHappened;
