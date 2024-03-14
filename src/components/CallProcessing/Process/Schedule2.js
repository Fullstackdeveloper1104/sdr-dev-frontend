import moment from 'moment';
import React, { useCallback, useEffect } from 'react'
const activeClass = 'time-button m-px flex h-10 w-full items-center justify-center rounded-md border border-transparent bg-blue-600 text-lg font-medium font-medium text-white hover:border-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:bg-blue-500 dark:hover:border-gray-700';
const dActiveClass = 'rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'


const Schedule2 = ({setIndex,setTimeInfo, setFormObjContact, formObjContact,timeInfo = false,happenedIndex}) => {
    const getPeriods = ()=>{
        const timeLists = ['9:00 AM',"5:30 PM"];
        const format = 'h:mm A';
        const startTime = moment(timeLists[0], format);
        const endTime = moment(timeLists[1], format);

        const allTimes = [];

        let currentTime = startTime;
        while (currentTime.isSameOrBefore(endTime)) {
            allTimes.push(currentTime.format(format));
            currentTime.add(30, 'minutes'); // Change this value to adjust the interval between times
        }
        return allTimes;
    }
    useEffect(()=>{
        if(!timeInfo){
           setTimeInfo('9:00 AM') 
        }
    },[timeInfo])
    const activeButton = (e,time)=>{
        e.target.className = activeClass;
        const buttons = document.querySelectorAll(".time-button");
        for(var i = 0 ; i <  buttons.length;i++){
            const button = buttons[i];
            if ((button.textContent) === time) {
                button.className = activeClass;
            } else {
                button.className = dActiveClass;
            }
        }
        setTimeInfo(time);
        setFormObjContact({...formObjContact,apptTime:`${time} EST`});
    }
    return (
        <><div
            class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
            <div class="">
                <p
                    class="text-center text-base font-medium lg:text-lg xl:text-xl">
                    What time did you schedule the appointment for?
                </p>
                {/* <!-- Times --> */}
                <div class="mt-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 lg:gap-4">
                    {
                        [...getPeriods()].map((time,index)=>{
                            return (
                                <button
                                    key={index}
                                    onClick={(e)=>activeButton(e,time)}
                                    type="button"
                                    class={timeInfo && timeInfo ==time ?activeClass: dActiveClass}>
                                    {time}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>

            <div class="cursor-pointer flex flex-wrap items-center justify-between gap-2">
                <a
                    onClick={()=>setIndex(2)}
                    class="inline-flex items-center gap-x-2 text-sm text-gray-800 transition hover:text-secondary">
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
                    onClick={()=>{happenedIndex === 0? setIndex(19) :setIndex(4)}}
                    class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-10 py-2 text-lg font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
                    Next

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        class="h-4 w-4"
                        viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div></>
    )
}

export default Schedule2
