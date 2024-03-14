import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
const activeClass = 'day-button m-px flex h-10 w-full items-center justify-center rounded-xl border border-transparent bg-blue-600 text-sm font-medium font-medium text-white hover:border-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:bg-blue-500 dark:hover:border-gray-700';
const dActiveClass = 'm-px  flex h-10 w-full items-center justify-center rounded-xl border border-transparent text-sm font-medium transition hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 '
const Schedule1 = ({ setPickerInfo,setFormObjContact, formObContact,setIndex,pickerInfo = false}) => {
    const defaultDate = new Date().getDate();
    const defaultMonth= new Date().getMonth();
    const defaultYear=  new Date().getFullYear();
    const [selectedDate, setSelectedDate] = useState(defaultDate);
    const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [monthInDays, setMonthInDays] = useState(0);
    const [dayIndex, setDayIndex] = useState(0);
    const [prevMonthInDays, setPrevMonthInDays] = useState(0);
    const selectDayFunc = (element,day)=>{
        setSelectedDate(day)
        element.target.className = activeClass;
        const buttons = document.querySelectorAll(".day-button");
        for(var i = 0 ; i <  buttons.length;i++){
            const button = buttons[i];
            if (parseInt(button.textContent) === day) {
                button.className = activeClass;
            } else {
                button.className = dActiveClass;
            }
        }
    };
    const nextMonthSelect = ()=>{
        if(selectedMonth === 11) setSelectedMonth(0)
        else setSelectedMonth(selectedMonth + 1);
    }
    const prevMonthSelect = ()=>{
        if(selectedMonth === 0) setSelectedMonth(11)
        else setSelectedMonth(selectedMonth - 1);
    }
    useEffect(() => {
        const _selectedDate = moment().set('year', selectedYear).set('months', selectedMonth).set('dates', selectedDate);
        const _dayIndex = _selectedDate.set('dates', 1).day();
        const _prevDays = _selectedDate.set('dates', 0).date();
        setMonthInDays(_selectedDate.set('months', selectedMonth).daysInMonth());
        setPrevMonthInDays(_prevDays)
        setDayIndex(_dayIndex === 0 ? 7 : _dayIndex);
        const _clonedDates = moment().set('years',selectedYear).set('months',selectedMonth).set('dates',selectedDate);
        setPickerInfo(_clonedDates);
        setFormObjContact({...formObContact,apptDate:moment(_clonedDates).format('MMMM Do YYYY')});
    }, [selectedDate, selectedMonth, selectedYear]);
    return (
        <>
            <div class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
                <div class="">
                    <p class="text-center text-base font-medium lg:text-lg xl:text-xl">
                        What day did you schedule the appointment for?
                    </p>

                    <div class="mx-auto mt-6 max-w-sm space-y-0.5">
                        <div class="mx-1.5 grid grid-cols-5 items-center gap-x-3 pb-3">
                            <div class="col-span-1">
                                <button
                                    type="button"
                                    onClick={prevMonthSelect}
                                    class="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-secondary/20 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    <svg
                                        class="h-4 w-4 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                </button>
                            </div>

                            <div class="col-span-3 flex items-center justify-center gap-x-1">
                                <div class="relative">
                                    <select
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                        className="bg-transparent appearance-none outline-none text-end font-[500]"
                                        data-hs-select='{
			  "placeholder": "Select month",
			  "toggleTag": "<button type=\"button\"></button>",
			  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1]",
			  "dropdownClasses": "mt-2 z-50 w-32 max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
			  "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
			  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
			}'
                                        // class="hidden"

                                    >
                                        <option value={0}>
                                            January
                                        </option>
                                        <option value={1}>February</option>
                                        <option value={2}>March</option>
                                        <option value={3}>April</option>
                                        <option value={4}>May</option>
                                        <option value={5}>June</option>
                                        <option value={6}>July</option>
                                        <option value={7}>August</option>
                                        <option value={8}>September</option>
                                        <option value={9}>October</option>
                                        <option value={10}>November</option>
                                        <option value={11}>December</option>
                                    </select>
                                </div>

                                <span class="text-gray-800 dark:text-gray-200">/</span>

                                <div class="relative">
                                    <select
                                        defaultValue={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="bg-transparent appearance-none outline-none font-[500] "
                                        data-hs-select='{"placeholder": "Select year",
			  "toggleTag": "<button type=\"button\"></button>",
			  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1]",
			  "dropdownClasses": "mt-2 z-50 w-20 max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
			  "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
			  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-gray-800 dark:text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
			}'
                                        // class="hidden"
                                    >
                                        <option>2023</option>
                                        <option>2024</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-span-1 flex justify-end">
                                <button
                                    type="button"
                                    onClick={nextMonthSelect}
                                    class="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-secondary/20 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    <svg
                                        class="h-4 w-4 flex-shrink-0"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="grid grid-cols-7 pb-1.5">
              <span class="m-px block text-center text-sm font-medium text-gray-500">
                Mo
              </span>
                            <span class="m-px block text-center text-sm font-medium text-gray-500">
                Tu
              </span>
                            <span class="m-px block text-center text-sm font-medium text-gray-500">
                We
              </span>
                            <span class="m-px block text-center text-sm font-medium text-gray-500">
                Th
              </span>
                            <span class="m-px block text-center text-sm font-medium text-gray-500">
                Fr
              </span>
                            <span class="m-px block text-center text-sm font-medium text-gray-500">
                Sa
              </span>
                            <span class="m-px block text-center text-sm font-medium text-gray-500">
                Su
              </span>
                        </div>
                        <div class="grid grid-cols-7">
                            {
                                (monthInDays + dayIndex) && Array(monthInDays + dayIndex - 1).fill().map((_, i) => {
                                    const _day = i + 1;
                                    return (
                                        _day <= dayIndex - 1 ? <div key={i}>
                                                <button
                                                    type="button"
                                                    class="m-px flex h-10 w-full items-center justify-center rounded-xl border border-transparent text-sm font-medium transition hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300"
                                                    disabled
                                                >
                                                    {prevMonthInDays - dayIndex + _day + 1}
                                                </button>
                                            </div> :
                                            <div key={i}>
                                                <button
                                                    onClick={(e) => {selectDayFunc(e,_day + 1 - dayIndex) ;}}
                                                    type="button"
                                                    class= {selectedYear == defaultYear &&  selectedMonth == defaultMonth && (selectedDate == (_day + 1 - dayIndex)) ? activeClass:dActiveClass}
                                                >
                                                    {_day + 1 - dayIndex}
                                                </button>
                                            </div>
                                    )
                                })
                            }
                            {/* {
                dayIndex && Array(dayIndex - 1).fill().map((_, index) => {
                  return <div key={index}>
                    <button
                      onClick={(e) => {selectDayFunc(e,monthInDays - dayIndex + index + 2);}}
                      type="button"
                      class="m-px flex h-10 w-full items-center justify-center rounded-xl border border-transparent text-sm font-medium transition hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300"
                    >
                      {monthInDays - dayIndex + index + 2}
                    </button>
                  </div>
                })
              } */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="cursor-pointer flex flex-wrap items-center justify-between gap-2">
                <a
                    onClick={() => setIndex(1)}
                    class="inline-flex items-center gap-x-2 text-sm text-gray-800 transition hover:text-secondary"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                    Go Back
                </a>
                <a
                    onClick={() => setIndex(3)}
                    class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-10 py-2 text-lg font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
                >
                    Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </a>
            </div>
        </>
    );
};

export default Schedule1;