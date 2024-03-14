import React from 'react'
import clappinghand from "../../../assets/img/clapping-hand.svg"
import like from  "../../../assets/img/like.svg"
import smile from "../../../assets/img/smile.svg"
import { useEffect } from 'react'


const handleFinish = () => {
    console.log('Finish')
    fetch('/find-lead', {
        method:'GET',
    }).then(res => {
        if (res.status === 200) {
            console.log('Success')
        //     reload the page
        window.location.reload()
        } else {
            console.log('Failed')
        }
    })
}
const Hungup = ({setIndex,happenedIndex, updateDialoutcomes}) => {
    useEffect(()=>{
        console.log(happenedIndex,'happenedIndex');
    },[happenedIndex])
  return (
    <>	<div
    class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
    <div class="h-full min-h-[200px] overflow-hidden">
        <p
            class="text-center text-base font-medium lg:text-lg xl:text-xl">
            {happenedIndex == 7 ? "The prospect has been removed" : "Don't sweat it, you'll get them next time."}
        </p>

        <div class="relative z-10 mt-4 py-10 lg:mt-8">
            <h2
                class="mt-4 text-center text-2xl font-semibold md:text-3xl">
                {happenedIndex == 7 ? "On to the next one!":"Keep up the hard work!"}
            </h2>

            {happenedIndex != 7 && <div
                class="absolute inset-0 -z-10 grid place-content-center">
                <div class="relative h-48 w-48">
                    <img
                        src={clappinghand}
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-1 select-none" />
                    <img
                        src={clappinghand}
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-2 select-none" />
                    <img
                       src={like}
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-3 select-none" />
                    <img
                         src={smile}
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-4 select-none" />
                    <img
                       src={smile}
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-5 select-none" />
                    <img
                          src={like}
                        alt=""
                        class="pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-6 select-none" />
                </div>
            </div>}
        </div>
    </div>
</div>

<div class="cursor-pointer flex flex-wrap items-center justify-between gap-2">
    <a
      onClick={()=>happenedIndex ==7 ? setIndex(18):setIndex(1)}
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
    <a
        onClick={() => { updateDialoutcomes(happenedIndex);handleFinish();}}
        class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg">
        Finish
    </a>
</div></>
  )
}

export default Hungup