import React, { useEffect, useState } from 'react'
import BasicModal from './BasicModel'

const Appointment = ({appointment,progress}) => {

  const [motion,setmotion]= useState(progress)

  useEffect(()=>{
      setTimeout(()=>{
        setmotion(progress)
      },100)
  },[])
  return (<>
    <div class="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
      <div class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
        <span class="rounded-lg bg-accent-1 p-1 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 19"
            class="h-5 w-5"
          >
            <path d="M15.349 1.395h-2.093V.698a.698.698 0 0 0-1.396 0v.697H4.885V.698a.698.698 0 1 0-1.396 0v.697H1.395A1.395 1.395 0 0 0 0 2.791v13.953a1.395 1.395 0 0 0 1.395 1.396H15.35a1.395 1.395 0 0 0 1.395-1.396V2.791a1.395 1.395 0 0 0-1.395-1.396ZM3.489 2.791v.697a.698.698 0 0 0 1.395 0v-.697h6.976v.697a.698.698 0 0 0 1.396 0v-.697h2.093v2.79H1.395v-2.79h2.093Zm11.86 13.953H1.395V6.977H15.35v9.767ZM6.977 9.07v5.581a.698.698 0 1 1-1.396 0v-4.453l-.385.194a.698.698 0 1 1-.624-1.249l1.395-.698a.698.698 0 0 1 1.01.625Zm5.159 2.655-1.67 2.229h1.395a.698.698 0 0 1 0 1.395H9.07a.697.697 0 0 1-.558-1.116l2.51-3.347a.697.697 0 1 0-1.161-.77.697.697 0 1 1-1.208-.697 2.093 2.093 0 1 1 3.483 2.306Z" />
          </svg>
        </span>
        <h6 class="text-base font-medium">Appointments</h6>
      </div>

      <div class="flex items-center gap-px text-sm font-medium text-primary">
        {/* <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 21"
            class="h-4 w-4"
          >
            <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
          </svg>
        </span> */}
        {/* <span class=""> +5% </span> */}
      </div>
    </div>

    <div class="px-4 py-6 lg:p-8">
      <h2 class="text-5xl font-medium lg:text-8xl">{appointment}</h2>
    </div>

    <div class="">
      <div class="mb-2 flex flex-wrap justify-between gap-4 text-sm font-medium text-primary">
        <p class="font-semibold">Progress Tracker</p>
        <p>
          <span class="font-medium text-secondary">{progress}%</span>
          to goal
        </p>
      </div>

      <div
        class="flex h-5 w-full overflow-hidden bg-secondary/10"
        role="progressbar"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div 
      
          class="flex flex-col transition-all !duration-500  justify-center overflow-hidden whitespace-nowrap bg-[#f4b610] text-center text-xs text-white"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
   
  </div>
 
  </>
  )
}

export default Appointment