import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'

export const DialOutcomes = ({ appointment, email, hungup, callback, notinterested, noanswer, referral, discard }) => {



	return (
		<div class="rounded-xl bg-secondary/10 p-5 2xl:col-span-3">
			<div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
				<div class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
					<span class="rounded-lg bg-accent-1 p-1 text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 18"
							class="h-5 w-5"
						>
							<path d="M15.604 4.38a.636.636 0 0 1-.857-.271 7.482 7.482 0 0 0-2.66-2.935.638.638 0 0 1-.028-1.057.636.636 0 0 1 .707-.019 8.86 8.86 0 0 1 3.11 3.426.636.636 0 0 1-.272.856ZM.636 4.452a.636.636 0 0 0 .564-.343 7.483 7.483 0 0 1 2.66-2.935.636.636 0 1 0-.679-1.076 8.86 8.86 0 0 0-3.11 3.426.636.636 0 0 0 .565.928Zm14.794 8.263a1.272 1.272 0 0 1-1.098 1.912h-3.244a3.18 3.18 0 0 1-6.232 0H1.613a1.272 1.272 0 0 1-1.097-1.912c.717-1.236 1.097-2.994 1.097-5.083a6.36 6.36 0 1 1 12.719 0c0 2.088.38 3.846 1.098 5.083Zm-5.66 1.912H6.174a1.908 1.908 0 0 0 3.596 0Zm4.562-1.272c-.846-1.452-1.272-3.377-1.272-5.723a5.088 5.088 0 1 0-10.175 0c0 2.346-.428 4.272-1.272 5.723h12.719Z" />
						</svg>
					</span>
					<h6 class="text-base font-medium">Dial Outcomes</h6>
				</div>
			</div>

			<div class="pt-6 lg:pb-4">
				<div
					class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-20">
					<div class="space-y-4">
						{/* <div class="">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Appointment
									</h6>
								</div>
								<p class="text-2xl font-semibold">{appointment}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="40"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${appointment}%` }}></div>
							</div>
						</div> */}

						<div className='pt-6'>
							<div class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Callback
									</h6>
								</div>
								<p class="text-2xl font-semibold">{callback}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${callback}%` }}></div>
							</div>
						</div>

						<div className="pt-6">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Email
									</h6>
								</div>
								<p class="text-2xl font-semibold">{email}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="15"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${email}%` }}></div>
							</div>
						</div>
						<div className="pt-6">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										No Answer
									</h6>
								</div>
								<p class="text-2xl font-semibold">{noanswer}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="40"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${noanswer}%` }}></div>
							</div>
						</div>
						{/* <div class="">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Referral
									</h6>
								</div>
								<p class="text-2xl font-semibold">{referral}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="33"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${referral}%` }}></div>
							</div>
						</div> */}
					</div>
					<div class="space-y-4">
						<div className="pt-6">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Hung Up
									</h6>
								</div>
								<p class="text-2xl font-semibold">{hungup}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${hungup}%` }}></div>
							</div>
						</div>

						<div className="pt-6">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Not Interested
									</h6>
								</div>
								<p class="text-2xl font-semibold">{notinterested}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="30"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${notinterested}%` }}></div>
							</div>
						</div>
						<div className="pt-6">
							<div
								class="mb-1.5 flex flex-wrap items-center justify-between gap-2">
								<div class="">
									<h6 class="text-sm font-medium">
										Discard
									</h6>
								</div>
								<p class="text-2xl font-semibold">{discard}</p>
							</div>
							<div
								class="flex h-1.5 w-full overflow-hidden bg-secondary/15"
								role="progressbar"
								aria-valuenow="40"
								aria-valuemin="0"
								aria-valuemax="100">
								<div

									class="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-secondary text-center text-xs text-white transition-all !duration-500 "
									style={{ width: `${discard}%` }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
