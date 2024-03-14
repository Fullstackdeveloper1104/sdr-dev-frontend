import React, { useEffect, useRef, useState } from "react";
import ScriptTab from "./ScriptTab";
import ObjectionTab from "./ObjectionTab";
import OfferTab from "./OfferTab";
import VoiceTab from "./VoiceTab";
import { useDispatch } from "react-redux";
import { updateHelperSlice } from "../../../store/slices/helperSlice";
import { Flip } from 'gsap/all';
import gsap from 'gsap';


gsap.registerPlugin(Flip);

const WhatSee = ({ setIndex, data, initialCall, twilioDevice}) => {

  const groupRef = useRef(null);


  useEffect(() => {}, []);

  const [clicked, setClicked] = useState(false);
  const [loader, setloader] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setloader(true);
    dispatch(updateHelperSlice({name:"showWave",value:true}))
    setTimeout(() => {
      if (clicked) {
        twilioDevice.disconnectAll();
        setIndex(1);
        setloader(false)
        dispatch(updateHelperSlice({name:"showWave",value:false}))
      } else {
        setClicked(true);
        initialCall();
        setloader(false)
        dispatch(updateHelperSlice({name:"showWave",value:false}))
      }
    }, 1000);
  };

  const [tab, setTab] = useState(0);

  const [firstClick , setFirstClick] = useState(true)
  const handleButtonClick = (index) => {
    // Get the initial state
    if(firstClick)
    {
      const group = document.querySelector(".tab");
      document.getElementById("tit").style.display="none"
    const state = Flip.getState(".tab , .tab button");
    setFirstClick(false)
    // Toggle the reorder class
    group.classList.toggle("reorder");

    // Animate with Flip
 
    Flip.from(state, {
      absolute: true,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.inOut',
      // Add other GSAP tweening properties here if needed
      onComplete: () => {
        setTab(index) // Add your logic here
      },
    });

   
  }
  else{
    setTab(index)
  }


  };


  return (
    <>
      <div
        id="scroll"
        class="h-full max-h-[450px] min-h-[360px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/50 p-6 2xl:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2"
      >
        <h4 class="mb-6 text-center text-lg font-semibold xl:text-xl" id="tit">
          What would you like to see?
        </h4>
         
        <nav className="tab flex flex-col flex-wrap items-center justify-center gap-2" ref={groupRef} >
          <button
            onClick={()=>handleButtonClick(1)}
            type="button"
            role="tab"
            data-tab="script-tab-content"
            className={` ${
              tab == 1 && "active"
            } inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base`}
          >
            Script
          </button>
          <button
            onClick={()=>handleButtonClick(2)}
            type="button"
            role="tab"
            data-tab="objections-tab-content"
            className={` ${
              tab == 2 && "active"
            } inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base`}
          >
            Objections
          </button>
          {/*<button*/}
          {/*  onClick={()=>handleButtonClick(3)}*/}
          {/*  type="button"*/}
          {/*  role="tab"*/}
          {/*  data-tab="offers-tab-content"*/}
          {/*  className={` ${*/}
          {/*    tab == 3 && "active"*/}
          {/*  } inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base`}*/}
          {/*>*/}
          {/*  Special Offer*/}
          {/*</button>*/}
          {/*<button*/}
          {/*  onClick={()=>handleButtonClick(4)}*/}
          {/*  type="button"*/}
          {/*  role="tab"*/}
          {/*  data-tab="voicemail-tab-content"*/}
          {/*  className={` ${*/}
          {/*    tab == 4 && "active"*/}
          {/*  } inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base`}*/}
          {/*>*/}
          {/*  Voicemail*/}
          {/*</button>*/}
        </nav>

        <div className="mt-6">
          {tab == 1 && <ScriptTab words={data.script} />}
          {tab == 2 && <ObjectionTab />}
          {tab == 3 && <OfferTab words = {data.offer} />}
          {tab == 4 && <VoiceTab  words = {data.voicemail}/>}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          id="dial-btn"
          onClick={handleClick}
          className="inline-flex h-12 w-35 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-[#f4b610] hover:bg-[#f4b610] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg"
        >
          {!loader ? (
            <span className="btn-text"> {!clicked ? "Dial" : "Hang Up"}</span>
          ) : (
            <svg
              id="loader"
              class=" h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* <div
   className="h-full max-h-[450px] min-h-[360px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
   <h4
       id="heading"
       className="text-center text-lg font-semibold xl:text-xl">
       What would you like to see?
   </h4>

   <div
       className="relative mt-6 flex flex-col items-center justify-center gap-4">
       <button
           id="animateButton"
           type="button"
           className="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
           Script
       </button>

       <button
           id="animateButton2"
           type="button"
           className="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
           Objections
       </button>
       <button
           id="animateButton3"
           type="button"
           className="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
           Special Offer
       </button>
       <button
           id="animateButton4"
           type="button"
           className="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
           Voicemail
       </button>
   </div>

   <div id="parentDiv" className="myclassName"></div>
</div>

<div className="text-center">
   <a
       onClick={handleClick}
       className="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-10 py-2 text-lg font-medium text-white transition hover:border-[#f4b610] hover:bg-[#f4b610] hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
       {!clicked?"Dial":"Process"}
   </a>
</div> */}
    </>
  );
};

export default WhatSee;
