import React from 'react'
import avatar1 from "../../assets/img/avatar-1.png"
import defaultImg from '../../assets/image.png'
const YourProfile = ({ location, activesince, reportsto, fullname, avatarLink }) => {
	return (
		<div class="rounded-xl bg-secondary/10 p-5">
			<div
				class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
				<div
					class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
					<span
						class="rounded-lg bg-accent-1 p-1 text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							fill="currentColor"
							class="h-5 w-5">
							<path
								d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
						</svg>
					</span>
					<h6 class="text-base font-medium">Your Profile</h6>
				</div>
			</div>

			<div class="mt-6">
				<div class="">
					<div class="flex flex-wrap items-center gap-2">
						<div
							class="h-12 w-12 overflow-hidden rounded-full">
							<img
								src={avatarLink || defaultImg}
								alt=""
								class="h-full w-full rounded-full object-cover" />
						</div>
						<div class="">
							<h6 class="text-sm font-medium">{fullname}</h6>
							{/* <a
															href="#"
															class="block text-xs text-gray-600 transition hover:text-secondary">
															Edit profile
														</a> */}
						</div>
					</div>

					<ul class="mt-4">
						<li
							class="flex flex-wrap justify-between border-b border-b-secondary/20 py-4 text-sm">
							<span class="font-medium w-[50%]">
								Active since:
							</span>
							<span className='w-[50%]'> {activesince} </span>
						</li>
						<li
							class="flex flex-wrap justify-between border-b border-b-secondary/20 py-4 text-sm">
							<span class="font-medium w-[50%]">
								Reports to:
							</span>
							<span className='w-[50%]'> {reportsto} </span>
						</li>
						<li
							class="flex flex-wrap justify-between border-b border-b-secondary/20 py-4 text-sm">
							<span class="font-medium w-[50%]"> Location: </span>
							<span class="w-[50%]"> {location} </span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default YourProfile