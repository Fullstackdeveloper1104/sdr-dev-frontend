import React from 'react'

const NotInterested = ({setIndex}) => {
  return (
   <>	<div
   class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
   <h4 class="text-center text-lg font-semibold xl:text-xl">
       Why is the prospect not interested?
   </h4>

   <div class="cursor-pointer mt-6 flex flex-col items-center justify-center gap-4">
       <a
           onClick={()=>setIndex(15)}
           class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg">
           No budget
       </a>
       <a
           onClick={()=>setIndex(15)}
           class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg">
           Uses competitor
       </a>
       <a
           onClick={()=>setIndex(15)}
           class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg">
           Not a good time
       </a>
       <a
           onClick={()=>setIndex(15)}
           class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg">
           No need for our service
       </a>
   </div>
</div>

<div class="cursor-pointer flex flex-wrap items-center justify-between gap-2">
   <a
       onClick={()=>setIndex(1)}
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
</div></>
  )
}

export default NotInterested