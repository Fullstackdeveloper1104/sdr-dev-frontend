import React from "react";
import avatar1 from "../../assets/img/avatar-1.png";
import avatar2 from "../../assets/img/avatar-2.png";
import avatar3 from "../../assets/img/avatar-3.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

export const Team = ({TeamMembers}) => {
  const navigate = useNavigate();
  // console.log(TeamMembers);
    const groupedMembers = [];
    for (let i = 0; i < TeamMembers.length; i += 3) {
        groupedMembers.push(TeamMembers.slice(i, i + 3));
    }

    // console.log(groupedMembers);

  return (
    <div class="rounded-xl bg-secondary/10 p-5">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
        <div class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
          <span class="rounded-lg bg-accent-1 p-1 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
            </svg>
          </span>
          <h6 class="text-base font-medium">Team</h6>
        </div>
      </div>

      <div class="team-slider-container mt-6">
        <div class="team-slider">
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper team"
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
          >
            {/*{TeamMembers*/}
            {/*  .fill(0)*/}
            {/*  .map((obj) => {*/}
            {/*    return (*/}
            {/*      <SwiperSlide>*/}
            {/*        <div class="">*/}
            {/*          <div*/}
            {/*            class="group relative flex flex-wrap items-center gap-2 p-2"*/}
            {/*            onClick={() => navigate("/caller-dashboard")}*/}
            {/*          >*/}
            {/*            <div class="h-12 w-12 overflow-hidden rounded-full transition group-hover:ring group-hover:ring-secondary/20">*/}
            {/*              <img*/}
            {/*                src={obj.AvatarLink}*/}
            {/*                alt=""*/}
            {/*                class="h-full w-full rounded-full object-cover"*/}
            {/*              />*/}
            {/*            </div>*/}
            {/*            <div class="">*/}
            {/*              <h6 class="text-sm font-medium">John J.</h6>*/}
            {/*              <a class="block text-xs text-gray-600 transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:text-secondary">*/}
            {/*                See personal stats*/}
            {/*              </a>*/}
            {/*            </div>*/}
            {/*          </div>*/}

            {/*          <div*/}
            {/*            class="group relative flex flex-wrap items-center gap-2 p-2"*/}
            {/*            onClick={() => navigate("/call-processing")}*/}
            {/*          >*/}
            {/*            <div class="h-12 w-12 overflow-hidden rounded-full transition group-hover:ring group-hover:ring-secondary/20">*/}
            {/*              <img*/}
            {/*                src={avatar2}*/}
            {/*                alt=""*/}
            {/*                class="h-full w-full rounded-full object-cover"*/}
            {/*              />*/}
            {/*            </div>*/}
            {/*            <div class="">*/}
            {/*              <h6 class="text-sm font-medium">Abby A.</h6>*/}
            {/*              <a class="block text-xs text-gray-600 transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:text-secondary">*/}
            {/*                See personal stats*/}
            {/*              </a>*/}
            {/*            </div>*/}
            {/*          </div>*/}

            {/*          <div*/}
            {/*            class="group relative flex flex-wrap items-center gap-2 p-2"*/}
            {/*            onClick={() => navigate("/call-processing")}*/}
            {/*          >*/}
            {/*            <div class="h-12 w-12 overflow-hidden rounded-full transition group-hover:ring group-hover:ring-secondary/20">*/}
            {/*              <img*/}
            {/*                src={avatar3}*/}
            {/*                alt=""*/}
            {/*                class="h-full w-full rounded-full object-cover"*/}
            {/*              />*/}
            {/*            </div>*/}
            {/*            <div class="">*/}
            {/*              <h6 class="text-sm font-medium">Paul P.</h6>*/}
            {/*              <a class="block text-xs text-gray-600 transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:text-secondary">*/}
            {/*                See personal stats*/}
            {/*              </a>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </SwiperSlide>*/}

            {/*    );*/}
            {/*  })}*/}

              {groupedMembers.map((group, groupIndex) => (
                  <SwiperSlide key={groupIndex}>
                      {group.map((member, index) => (
                          <div className="group relative flex flex-wrap items-center gap-2 p-2 cursor-pointer" key={index} onClick={() => navigate(`/caller-stats?name=${encodeURIComponent(member.name)}`)}>
                              <div className="h-12 w-12 overflow-hidden rounded-full transition group-hover:ring group-hover:ring-secondary/20">
                                  <img
                                      src={member.AvatarLink}
                                      alt=""
                                      className="h-full w-full rounded-full object-cover"
                                  />
                              </div>
                              <div className="">
                                  <h6 className="text-sm font-medium">{member.FullName}</h6>
                                  <a  className="block text-xs text-gray-600 transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:text-secondary">
                                      See personal stats
                                  </a>
                              </div>
                          </div>
                      ))}
                  </SwiperSlide>
              ))}

{/*<div className="swiper-button-prev">*/}
{/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4DA3E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
{/*          <polyline points="15 18 9 12 15 6"></polyline>*/}
{/*        </svg>*/}
{/*      </div>*/}

      {/*<div className="swiper-button-next">*/}
      {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4DA3E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">*/}
      {/*    <polyline points="9 18 15 12 9 6"></polyline>*/}
      {/*  </svg>*/}
      {/*</div>*/}
          </Swiper>
        </div>

        {/* <div class="slider-controls mt-4 flex items-center justify-between">
          <button class="slider-prev flex h-8 w-8 items-center justify-center text-secondary/50 transition hover:text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>

          <div class="slider-navs flex items-center justify-center gap-2">
            <button class="block h-[3px] w-8 bg-secondary/50 transition"></button>
            <button class="block h-[3px] w-8 bg-secondary/50 transition"></button>
            <button class="block h-[3px] w-8 bg-secondary/50 transition"></button>
          </div>

          <button class="slider-next flex h-8 w-8 items-center justify-center text-secondary/50 transition hover:text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};
