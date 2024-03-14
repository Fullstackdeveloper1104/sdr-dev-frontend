import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from "react-data-table-component";
import Dashboard from "../../pages/Dashboard";
import WhatSee from "./Process/WhatSee";
import WhatHappened from "./Process/WhatHappened";
import Schedule1 from "./Process/Schedule1";
import Schedule2 from "./Process/Schedule2";
import Schedule3 from "./Process/Schedule3";
import Schedule4 from "./Process/Schedule4";
import Email1 from "./Process/Email1";
import Email2 from "./Process/Email2";
import Email3 from "./Process/Email3";
import Referral from "./Process/Referral";
import Referral2 from "./Process/Referral2";
import Referral3 from "./Process/Referral3";
import Referral4 from "./Process/Referral4";
import { Referral5 } from "./Process/Referral5";
import Referral6 from "./Process/Referral6";
import Hungup from "./Process/Hungup";
import NotInterested from "./Process/NotInterested";
import Discard from "./Process/Discard";
import wave from "../../assets/img/wave.gif";
import BasicModal from "../Common/BasicModel";
import ManagerDashboard from "../../pages/CallerDashboard";
import * as XLSX from "xlsx";
import { Swiper, SwiperSlide } from "swiper/react";
import yourFile from "../../assets/Demo.xlsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";
import Lottie from "react-lottie-player";
import loti from "../../data/my-old.json";
import { Player } from '@lottiefiles/react-lottie-player';
import { CSVLink } from "react-csv";
import moment from "moment/moment";
import { Device } from "@twilio/voice-sdk"
import { CircularProgress } from "@mui/material";
import CommonDiscard from "./Process/CommonDiscard";
import Appointment from "./Process/Appointment";
import Cookies from "js-cookie";

// just a test

const CallProcessing = () => {
    const [isPlayer, setIsPlayer] = useState("hidden");
    const [twilioDevice, setTwilioDevice] = useState(null);
    const [dialNumber, setDialNumber] = useState('');

    const updateDialOutcomes = (happenedIndex) => {
        let choice = '';
        let detail = '';
        if (happenedIndex === 0) {
            choice = 'FirstAppt';
            detail = 'N/A'

        }
        else if (happenedIndex === 1) {
            choice = 'Callback';
            detail = 'N/A'
        }
        else if (happenedIndex === 2) {
            choice = 'EmailSent';
            detail = 'N/A'
        }
        else if (happenedIndex === 3) {
            choice = 'NewContact';
            detail = 'N/A'

        }
        else if (happenedIndex === 4) {
            choice = 'HangUp';
            detail = 'N/A'

        }
        else if (happenedIndex === 5) {
            choice = 'NotInterested';
            detail = 'N/A'
        }
        else if (happenedIndex === 6) {
            choice = 'NoAns';
            detail = 'N/A'
        }
        else if (happenedIndex === 7) {
            choice = 'Discarded';
            detail = 'N/A'
        }
        console.log(happenedIndex, choice, detail)

        fetch('/dialoutcomes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dialOutcome: choice,
                detail: detail
            })
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    console.log(data)
                })
            }

        })
    };
    const fetchToken = async () => {
        try {
            const response = await fetch('/token', {
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
               return data;  
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    };
    useEffect(() => {

        (async()=>{
            const tokenInfo = await fetchToken();
            if(tokenInfo){
                const device = new Device(tokenInfo.token, {
                    codecPreferences: ['opus', 'pcmu'],
                    logLevel: 1,
                    tokenRefreshMs: 30000,
                });
                device.register().then(() => {
                    console.log('Device registered');
                });
    
                device.addListener('connect', () => {
                    console.log('Connect event listener added...');
                });
    
                device.on('registered', () => {
                    console.log('Agent registered');
                    // Handle successful registration
                });
    
                device.on('connect', (connection) => {
                    console.log('Call connected');
                    // Handle successful connection
                });
                device.on('tokenWillExpire', async () => {
                    const tokenInfo = await fetchToken();
                    console.log('will expired after 5mins.');
                    window.location.reload();
                });                      
                setTwilioDevice(device);
            }else{
                window.location.reload();
            }
        })()
    }, []);





    // Function to toggle the isPlayer state
    const toggleIsPlayer = (type) => {
        if (type === "hidden") {
            setIsPlayer("hidden");
            console.log("hidden");
        } else {
            setIsPlayer("");
            console.log("visible");
        }

        console.log(isPlayer);

    };
    const [pickerInfo, setPickerInfo] = useState();
    const [timeInfo, setTimeInfo] = useState();
    const [index, setIndex] = useState(0);
    const [emailType, setEmailType] = useState('');
    const [happenedIndex, setHappenedIndex] = useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);

    const handleHungUp = () => {
        setIndex(15);
        handleClose4();
    };
    const [appointment, setAppointment] = useState('');
    useEffect(() => {
        console.log(happenedIndex, 'happenedIndex');
    }, [happenedIndex])
    function formatDateToCustomString(dateString) {
        if(dateString){
            const originalDate = new Date(dateString);
    
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
            return new Intl.DateTimeFormat('en-US', options).format(originalDate);
        }else{
            return '';
        }
    }

    const [formObj, setFormObj] = useState({
        name: "",
        title: "",
        phone: "",
        time: "EST",
        email: "",
    });

    useEffect(() => {
        if (index == 14) {
            setFormObj({
                name: "",
                title: "",
                phone: "",
                time: "EST",
                email: "",
            });
        }
    }, [index]);

    const { showWave } = useSelector((state) => {
        return state.helper;
    });
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(yourFile); // Fetch is not needed when using import
                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
                    type: "array",
                });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                const headers = jsonData[0];
                const records = jsonData.slice(1).map((row) => {
                    const record = {};
                    headers.forEach((header, index) => {
                        record[header] = row[index];
                    });
                    return record;
                });

                setData(records);
            } catch (error) {
                console.error("Error reading Excel file:", error);
            }
        };

        fetchData();
    }, []);

    const [formObjContact, setFormObjContact] = useState({
        leadid: "",
        company: "",
        contact: "",
        title: "",
        industry: "",
        time: '',
        address: "",
        city: "",
        state: "",
        contactId: "",
        website: "",
        linkedin: "",
        email: "",
        zip: "",
        apptDate: "",
        apptTime: "",
        apptType: '',
        bestPhone: "",

    })

    const [formObjNotes, setFormObjNotes] = useState({
        callNotes: "",
    });


    const [pageText, setPageText] = useState({});
    const PagerSetter = (data) => {
        var url = data["callOptions"][0].Website;

// Check if url is null, undefined, or an empty string
        if (url === null || url === undefined || url === "") {
            url = ''; // Set url to an empty string
        } else if (!url.includes('https://') && !url.includes('http://')) {
            // If url doesn't start with 'https://' or 'http://', prepend 'https://'
            url = `https://${url}`;
        }
        setFormObjContact({
            leadid: data["callOptions"][0].LeadId,
            company: data["callOptions"][0].CompanyName,
            contact: data["callOptions"][0].ContactName,
            title: data["callOptions"][0].Title,
            industry: data["callOptions"][0].Industry,
            time: data["callOptions"][0].TimeZoneName,
            address: data["callOptions"][0].Address_1,
            city: data["callOptions"][0].City,
            state: data["callOptions"][0].State,
            contactId: data["callOptions"][0].ContactId,
            website: url,
            linkedin: data["callOptions"][0].LinkedInProfile,
            email: data["callOptions"][0].Email,
            zip: data["callOptions"][0].ZipCode,
            apptDate: moment(pickerInfo).format('MMMM Do YYYY'),
            apptTime: `${timeInfo} EST`,
            apptType: 'First Appointment - 30 Minutes',
            bestPhone: data["callOptions"][0].BestPhoneNumber,
        });
        setDialNumber(data["callOptions"][0].BestPhoneNumber);

        setFormObjNotes({
            callNotes: data["callOptions"][0].CallerNotes,
            leadId: data["callOptions"][0].LeadId,
            tenantId: data["callOptions"][0].TenantID,
        });
        setTopBar({
            campaign: data["callOptions"][0].CampaignShortName,
            callCategory: data["callOptions"][0].CallCategory,
            leadId: data["callOptions"][0].LeadId,
            callDate: formatDateToCustomString(data["callOptions"][0].LastDialed)
        });
        setPageText({
            script: data["callOptions"][0].Script,
            offer: data["callOptions"][0].Offer,
            voicemail: data["callOptions"][0].VoiceMail,
        });
        setIsLoading(false)
    };
    // Fetch Csll Options
    useEffect(() => {
        fetch("/call-options", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                    console.log(data);
                    console.log(data["callOptions"][0]);

                    PagerSetter(data);
                })

            } else if (r.status === 401) {
                window.location.href = "/login";
            }
            else if (r.status === 302) {
                window.location.href = "/mdashboard";

            }
            else {
                toast.error('Something went wrong!', {
                    position: "top-right",
                    autoClose: 3000, // Auto close the notification after 3 seconds
                });
            }


        })
    }, []);
    // fetch call-options end


    function displayFormattedDate(elementId) {
        const dateElement = document.getElementById(elementId);

        if (dateElement) {
            const currentDate = new Date();
            const options = { weekday: "long", month: "long", day: "numeric" };
            const formattedDate = currentDate.toLocaleDateString("en-US", options);
            dateElement.innerHTML = formattedDate;
        }
    }

    function displayFormattedTime(elementId) {
        const timeElement = document.getElementById(elementId);

        if (timeElement) {
            const currentTime = new Date();

            const formattedTime = currentTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
            });

            timeElement.innerHTML = formattedTime;
        }
    }

    useEffect(() => {
        // Your function to be executed
        const yourFunction = () => {
            displayFormattedDate("currentDate");

            displayFormattedTime("currentTime");
        };

        // Set interval to execute your function every one minute (60000 milliseconds)
        const intervalId = setInterval(yourFunction, 60000);

        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        displayFormattedDate("currentDate");

        displayFormattedTime("currentTime");
    }, []);


    const handleChangeContact = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        setFormObjContact({ ...formObjContact, [name]: value })
    }
    const handleChangeNotes = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        setFormObjNotes({ ...formObjNotes, [name]: value })
    }
    const handleSubmitContact = (e) => {
        e.preventDefault()
        fetch("/call-contact-update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formObjContact),
        }).then((r) => {
            if (r.ok) {
                toast.success('Contact Information successfully Updated!', {
                    position: "top-right",
                    autoClose: 3000, // Auto close the notification after 3 seconds
                });


            } else if (r.status === 401) {
                window.location.href = "/login";
            }
            else {
                toast.error('Error in updating Contact Information!', {
                    position: "top-right",
                    autoClose: 3000, // Auto close the notification after 3 seconds
                });
            }
        });

    }
    const handleSubmitNotes = (e) => {
        e.preventDefault()
        console.log(formObjNotes)
        fetch("/call-options-notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formObjNotes),
        }).then((r) => {
            if (r.ok) {
                toast.success('Call Notes successfully Updated!', {
                    position: "top-right",
                    autoClose: 3000, // Auto close the notification after 3 seconds
                });
            } else if (r.status === 401) {
                window.location.href = "/login";

            } else {
                toast.error('Error in updating Call Notes!', {
                    position: "top-right",
                    autoClose: 3000, // Auto close the notification after 3 seconds
                });
            }
        });

    }
    const [selected, setSelected] = useState('contactName');
    const handleQueryTypeChange = (e) => {

        setSelected(e.target.value);

    }
    const tableColumns = [
        { name: 'LeadId', selector: row => row.LeadId, width: 'fit-content' },
        { name: 'Contact Name', selector: row => row.ContactName, width: 'match-parent' },
        { name: 'Company Name', selector: row => row.CompanyName, width: 'match-parent' },
        // Add more columns as needed
    ];


    const [searchResults, setSearchResults] = useState([])
    const handleChangeSearch = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)

        fetch("/call-options-search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ [name]: value, "queryType": selected }),
        }).then(r => {
            if (r.status === 401) {
                window.location.href = "/login";
            }
            r.json().then(data => setSearchResults(data.data))


        })
        // setFormObjContact({...formObjContact,[name]:value})
    }
    const initiateCall = () => {
        // read cookie using js
        const CallerPhone = Cookies.get('CallerPhone');
        // console.log(CallerPhone);

        const params = {
            // To:dialNumber
            // From: '+1' + formObjContact.bestPhone,
            To: '+1'+formObjContact.bestPhone,
            From: CallerPhone,
            CallerPhone: CallerPhone
        };

        twilioDevice.connect({
            params,
            rtcConstraints: {
                audio: true,
            },
        });
    };

    const handleRowClicked = (row) => {

        // set cookie LeadId
        // set cookie LeadId
        document.cookie = `LeadId=${row.LeadId}`
        //   reload the page
        window.location.reload()
    }

    const [topBar, setTopBar] = useState({})

    const [currentDateTime, setCurrentDateTime] = useState('');

    const updateDateTime = () => {
        // Get the current date and time
        const currentDatetime = new Date();

        // Convert to Eastern Time (ET)
        const etOffset = -5 * 60; // Offset in minutes for Eastern Time
        const etDatetime = new Date(currentDatetime.getTime() + etOffset * 60 * 1000);

        // Format the datetime as "MM/DD/YY EST"
        const options = {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        const formattedDatetime = etDatetime.toLocaleString('en-US', options);

        setCurrentDateTime(formattedDatetime);
    };

    const handleTimeStamps = () => {
        console.log('Time Stamps called')
        const currentTime = new Date();

        const NotesformattedTime = currentTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short",
        });
        const NotesformattedDate = currentTime.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });


        const valueAppend = NotesformattedDate + ' ' + NotesformattedTime + '\n';
        console.log(valueAppend)
        if (formObjNotes.callNotes === undefined || formObjNotes.callNotes === null) {
            setFormObjNotes({ ...formObjNotes, callNotes: valueAppend + '\n' })
        } else {
            setFormObjNotes({ ...formObjNotes, callNotes: formObjNotes.callNotes + valueAppend + '\n' })

        }


    }

    // const handleTimeStamps = () => {
    //     let date = new Date();
    //     let timeStamp = date.toISOString();
    //     console.log(timeStamp);
    //     setFormObjNotes({...formObjNotes, callNotes: timeStamp}); // Append a new line
    // }

    const csvData = [
        ["LeadID", "Company Name", "Contact Name", "Title", "Industry", "Contact Address", "City", "State", "Zip Code", "Time Zone", "Email", "Linkedin", "Website", "Appt Date", "Appt Time", "Appt Type", "Best Phone"],
        [formObjContact.leadid, formObjContact.company, formObjContact.contact, formObjContact.title, formObjContact.industry, formObjContact.address, formObjContact.city, formObjContact.state, formObjContact.zip, formObjContact.time, formObjContact.email, formObjContact.linkedin, formObjContact.website, formObjContact.apptDate, formObjContact.apptTime, appointment, formObjContact.bestPhone]
    ]


    return (
        <ManagerDashboard websiteUrl={formObjContact.website}>
            <ToastContainer />
            {" "}

            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className={`pointer-events-none absolute inset-0 z-20 ${isPlayer}`}>
                    <Player src={"https://lottie.host/43ca7dd8-6b2c-4fae-b8cb-7b9a6e25c4e8/uqvEeg4Nc5.json"} autoplay loop />
                </div>
                {/* <!--  --> */}
                <div className="">
                    <div className="flex flex-wrap gap-x-10 gap-y-2">
                        <h2
                            id="currentDate"
                            class="text-2xl font-medium lg:text-3xl 2xl:text-4xl"
                        >
                            Wednesday, September 25
                        </h2>
                        <h2
                            id="currentTime"
                            class="text-2xl font-medium lg:text-3xl 2xl:text-4xl"
                        >
                            9:05 AM
                        </h2>
                    </div>
                    <ul class="mt-4 flex flex-wrap items-center gap-3 md:gap-6">
                        <li class="text-sm font-medium">
                            Campaign:
                            <span class="text-blue-600"> {topBar.campaign}</span>
                        </li>
                        <li class="text-sm font-medium">
                            Call Category:
                            <span class="text-blue-600"> {topBar.callCategory} </span>
                        </li>
                        <li class="text-sm font-medium">
                            Lead ID:
                            <span class="text-blue-600"> {topBar.leadId} </span>
                        </li>
                        <li class="text-sm font-medium">
                            Last Dialed:
                            <span class="text-blue-600"> {topBar.callDate} </span>
                        </li>
                    </ul>
                </div>

                {/* <!-- Buttons --> */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleOpen2}
                        data-hs-overlay="#search-modal"
                        class="inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26.03 26.03"
                            fill="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                d="M2 11a9 9 0 0 1 15.39-6.34A9 9 0 1 1 2 11Zm23.74 13.32-6.26-6.26a11 11 0 1 0-1.42 1.42l6.26 6.26a1 1 0 0 0 .32.21A1.09 1.09 0 0 0 25 26a1 1 0 0 0 .38-.08.9.9 0 0 0 .54-.54A1 1 0 0 0 26 25a1.09 1.09 0 0 0-.08-.39 1 1 0 0 0-.18-.29Z" />
                        </svg>
                    </button>
                    <button
                        onClick={handleOpen3}
                        data-hs-overlay="#call-notes-modal"
                        class={`inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-secondary hover:text-white ${formObjNotes.callNotes === '' || formObjNotes.callNotes == null || formObjNotes.callNotes == undefined ? '' : 'bg-secondary text-white'}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                d="M17 17v3.59L20.59 17ZM2 22h13v-6a1 1 0 0 1 1-1h6V2H2ZM24 2v13.59a2 2 0 0 1-.15.76 1.92 1.92 0 0 1-.44.65L17 23.41a2 2 0 0 1-.65.44 2 2 0 0 1-.76.15H2a2 2 0 0 1-1.41-.59A2 2 0 0 1 0 22V2A2 2 0 0 1 .59.59 2 2 0 0 1 2 0h20a2 2 0 0 1 1.41.59A2 2 0 0 1 24 2ZM12 15H8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-4-2h8a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" />
                        </svg>
                    </button>
                    {/* <button
                        onClick={handleOpen4}
                        data-hs-overlay="#discard-modal"
                        class="inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 20"
                            fill="currentColor"
                            class="h-6 w-6"
                        >
                            <path
                                d="m25.71 7.71-6 6A1 1 0 0 1 18 13a1 1 0 0 1 .29-.71L22.59 8H13A11 11 0 0 0 2 19a1 1 0 0 1-.29.71A1 1 0 0 1 1 20a1 1 0 0 1-.71-.29A1 1 0 0 1 0 19 13 13 0 0 1 13 6h9.59l-4.3-4.29a1 1 0 0 1-.21-.33A1 1 0 0 1 18 1a1 1 0 0 1 .08-.38 1.15 1.15 0 0 1 .21-.33A1 1 0 0 1 19 0a1 1 0 0 1 .38.08 1.15 1.15 0 0 1 .33.21l6 6a1.15 1.15 0 0 1 .21.33.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33Z" />
                        </svg>
                    </button> */}
                </div>
            </div>
            {/* <!--  --> */}
            <div class="mt-10 grid flex-1 grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-10 ">
                <div class={"rounded-2xl bg-secondary/10 p-6 lg:p-10 relative"}>
                    <div
                        class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                        <div
                            class="relative flex items-center gap-2 before:absolute before:-bottom-[13px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                            <span class="rounded-lg bg-accent-1 p-1 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    fill="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        d="M14.69 14.05a6.91 6.91 0 0 0-3.12-2.48A4.23 4.23 0 0 0 13 9.47a4.15 4.15 0 1 0-8 0 4.23 4.23 0 0 0 1.42 2.1 6.91 6.91 0 0 0-3.12 2.48 7.62 7.62 0 1 1 11.38 0ZM6.23 8.31a2.78 2.78 0 0 1 1.71-2.56 2.74 2.74 0 0 1 1.6-.16 2.78 2.78 0 0 1 2.18 2.18A2.78 2.78 0 0 1 9 11.08a2.77 2.77 0 0 1-2.77-2.77ZM4.33 15a5.55 5.55 0 0 1 9.34 0 7.58 7.58 0 0 1-9.34 0ZM9 0a9 9 0 1 0 6.36 2.64A9 9 0 0 0 9 0Z" />
                                </svg>
                            </span>
                            <h6 class="text-lg font-medium">{happenedIndex === 0 ? "Appointment Information" : "Contact Information"} </h6>
                        </div>

                        <div class="flex">
                            {happenedIndex === 1 || index !== 5 ? "" : <CSVLink data={csvData} filename={"ContactInfo.csv"}
                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </CSVLink>}
                            <button
                                onClick={handleOpen}
                                data-hs-overlay="#edit-contact-modal"
                                type="button"
                                class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    fill="currentColor"
                                    class="h-4 w-4"
                                >
                                    <path
                                        d="m14.4 7.62-4-4 2.16-2.16 4 4Zm-8.94 8.94h-4v-4l7.9-7.94 4 4ZM17.58 4.44l-4-4a1.6 1.6 0 0 0-.47-.31 1.5 1.5 0 0 0-.57-.13 1.46 1.46 0 0 0-.54.11 1.38 1.38 0 0 0-.47.31L.42 11.52a1.38 1.38 0 0 0-.31.48 1.46 1.46 0 0 0-.11.55v4A1.43 1.43 0 0 0 1.44 18h4a1.46 1.46 0 0 0 .56-.11 1.38 1.38 0 0 0 .47-.31l11.1-11.1a1.38 1.38 0 0 0 .32-.48 1.46 1.46 0 0 0 .11-.54 1.5 1.5 0 0 0-.11-.55 1.6 1.6 0 0 0-.31-.47Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="mt-4">
                        <Swiper
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper contact"
                            navigation={{
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next",
                            }}
                        >
                            {Array(1)
                                .fill(0)
                                .map(() => {
                                    return (
                                        <SwiperSlide>
                                            <form action="" class="px-4">
                                                <div class="flex items-center justify-end">
                                                    <a href={`mailto:${formObjContact.email}`} name={"email"}
                                                        class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            class="h-5 w-5"
                                                        >
                                                            <path
                                                                d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                                            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                                                        </svg>
                                                    </a>
                                                    <a href={formObjContact.linkedin} target="_blank" name={"linkedin"}
                                                        class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 32 32"
                                                            fill="currentColor"
                                                            class="h-6 w-6"
                                                        >
                                                            <path
                                                                d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5Zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5Zm2.938 1.719a1.719 1.719 0 1 0 0 3.437 1.719 1.719 0 0 0 0-3.437Zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5ZM9 13.5V23h2.969v-9.5Z" />
                                                        </svg>
                                                    </a>
                                                    <a href={`${formObjContact.website}`} target="_blank"
                                                        name={"website"}
                                                        class="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            class="h-5 w-5"
                                                        >
                                                            <circle cx="12" cy="12" r="10" />
                                                            <path
                                                                d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
                                                        </svg>
                                                    </a>
                                                </div>

                                                {(happenedIndex != 0 || index != 5) && <div className="space-y-4">
                                                    <div class="grid grid-cols-1 gap-4 xl:grid-cols-1">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="company-name"
                                                                name="company"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Company Name"
                                                                value={formObjContact.company}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="company-name"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Company Name
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="industry"
                                                                name="industry"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Industry"
                                                                value={formObjContact.industry}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="industry"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Industry
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="contact-name"
                                                            name="contact"
                                                            className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                            placeholder="Contact Name"
                                                            value={formObjContact.contact}
                                                            readOnly
                                                        />
                                                        <label
                                                            htmlFor="contact-name"
                                                            className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                        >
                                                            Contact Name
                                                        </label>
                                                    </div>
                                                    <div class={index === 5 ? "grid grid-cols-2 gap-4 xl:grid-cols-2" : "grid grid-cols-1 gap-4 xl:grid-cols-1"}>

                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="title"
                                                                name="title"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Title"
                                                                value={formObjContact.title}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="title"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Title
                                                            </label>
                                                        </div>
                                                        {happenedIndex === 1 || index !== 5 ? "" : <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="bestPhone"
                                                                name="time"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Best Phone"
                                                                value={formObjContact.bestPhone}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="bestPhone"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Best Phone
                                                            </label>
                                                        </div>}
                                                    </div>

                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="address"
                                                            name="address"
                                                            className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                            placeholder="Contact Address"
                                                            value={formObjContact.address}
                                                            readOnly
                                                        />
                                                        <label
                                                            htmlFor="address"
                                                            className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                        >
                                                            Contact Address
                                                        </label>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-4 md:grid-cols-3 xl:grid-cols-3">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="city"
                                                                name="city"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="City"
                                                                value={formObjContact.city}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="city"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                City
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="state"
                                                                name="state"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="State"
                                                                value={formObjContact.state}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="state"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                State
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="zipcode"
                                                                name="zip"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Zip Code"
                                                                value={formObjContact.zip}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="zipcode"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Zip Code
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="timezone"
                                                            name="time"
                                                            className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                            placeholder="Time Zone"
                                                            value={formObjContact.time}
                                                            readOnly
                                                        />
                                                        <label
                                                            htmlFor="timezone"
                                                            className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                        >
                                                            Time Zone
                                                        </label>
                                                    </div>
                                                    {/*New fields*/}
                                                    {happenedIndex !== 1 &&

                                                        <div
                                                            className={"grid grid-cols-3 gap-4 xl:grid-cols-3 md:grid-cols-3"}>
                                                            {index !== 5 ? "" :
                                                                <div className="relative">
                                                                    <input
                                                                        type="text"
                                                                        id="date"
                                                                        name="apptDate"
                                                                        className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                        placeholder="Appt Date"
                                                                        value={moment(pickerInfo).format('MM/DD/YYYY')}
                                                                        readOnly
                                                                    />
                                                                    <label
                                                                        htmlFor="date"
                                                                        className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                                    >
                                                                        Date
                                                                    </label>
                                                                </div>}


                                                            {index !== 5 ? "" : <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    id="apptTime"
                                                                    name="apptTome"
                                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                    placeholder="Appt Time"
                                                                    value={`${timeInfo} EST`}
                                                                    readOnly
                                                                />
                                                                <label
                                                                    htmlFor="state"
                                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                                >
                                                                    Appt Time
                                                                </label>
                                                            </div>}


                                                            {index !== 5 ? "" : <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    id="apptType"
                                                                    name="apptType"
                                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                    placeholder="Appt Type"
                                                                    value={formObjContact.apptType}
                                                                    readOnly
                                                                />
                                                                <label
                                                                    htmlFor="apptType"
                                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                                >
                                                                    Appointment Type
                                                                </label>
                                                            </div>}
                                                        </div>
                                                    }

                                                </div>}
                                                {(happenedIndex == 0 && index == 5) && <div className="space-y-4">
                                                    <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="company-name"
                                                                name="company"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Company Name"
                                                                value={formObjContact.company}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="company-name"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Company Name
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="industry"
                                                                name="industry"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Industry"
                                                                value={formObjContact.industry}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="industry"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Industry
                                                            </label>
                                                        </div>

                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="contact-name"
                                                            name="contact"
                                                            className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                            placeholder="Contact Name"
                                                            value={formObjContact.contact}
                                                            readOnly
                                                        />
                                                        <label
                                                            htmlFor="contact-name"
                                                            className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                        >
                                                            Contact Name
                                                        </label>
                                                    </div>
                                                    <div class={"grid grid-cols-1 gap-4 xl:grid-cols-1"}>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="title"
                                                                name="title"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Title"
                                                                value={formObjContact.title}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="title"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Title
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-1">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="address"
                                                                name="address"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Contact Address"
                                                                value={formObjContact.address}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="address"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Contact Address
                                                            </label>
                                                        </div>


                                                    </div>
                                                    <div className="grid grid-cols-3 gap-4 md:grid-cols-4 xl:grid-cols-3">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="city"
                                                                name="city"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="City"
                                                                value={formObjContact.city}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="city"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                City
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="state"
                                                                name="state"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="State"
                                                                value={formObjContact.state}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="state"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                State
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="zipcode"
                                                                name="zip"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Zip Code"
                                                                value={formObjContact.zip}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="zipcode"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Zip Code
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 xl:grid-cols-2">
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="bestPhone"
                                                                name="time"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Best Phone"
                                                                value={formObjContact.bestPhone}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="bestPhone"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Best Phone
                                                            </label>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="text"
                                                                id="timezone"
                                                                name="time"
                                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                placeholder="Time Zone"
                                                                value={formObjContact.time}
                                                                readOnly
                                                            />
                                                            <label
                                                                htmlFor="timezone"
                                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                            >
                                                                Time Zone
                                                            </label>
                                                        </div>
                                                    </div>

                                                    {/*New fields*/}
                                                    {happenedIndex !== 1 &&

                                                        <div
                                                            className={"grid grid-cols-3 gap-4 xl:grid-cols-3 md:grid-cols-3"}>
                                                            {index !== 5 ? "" :
                                                                <div className="relative">
                                                                    <input
                                                                        type="text"
                                                                        id="date"
                                                                        name="apptDate"
                                                                        className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                        placeholder="Appt Date"
                                                                        value={moment(pickerInfo).format('MM/DD/YYYY')}
                                                                        readOnly
                                                                    />
                                                                    <label
                                                                        htmlFor="date"
                                                                        className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                                    >
                                                                        Appt Date
                                                                    </label>
                                                                </div>}


                                                            {index !== 5 ? "" : <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    id="apptTime"
                                                                    name="apptTome"
                                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                    placeholder="Appt Time"
                                                                    value={`${timeInfo} EST`}
                                                                    readOnly
                                                                />
                                                                <label
                                                                    htmlFor="state"
                                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                                >
                                                                    Appt Time
                                                                </label>
                                                            </div>}


                                                            {index !== 5 ? "" : <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    id="apptType"
                                                                    name="apptType"
                                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                                    placeholder="Appt Type"
                                                                    value={appointment}
                                                                    readOnly
                                                                />
                                                                <label
                                                                    htmlFor="apptType"
                                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                                >
                                                                    Appointment Type
                                                                </label>
                                                            </div>}
                                                        </div>
                                                    }

                                                </div>}
                                            </form>
                                        </SwiperSlide>
                                    );
                                })}
                            {/* <div className="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4DA3E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>

              <div className="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4DA3E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div> */}
                        </Swiper>
                    </div>
                </div>

                <div class="flex flex-col rounded-2xl bg-secondary/10 p-6 lg:p-10">
                    <div
                        class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                        <div
                            class="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                            <span class="rounded-lg bg-accent-1 p-1 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 15"
                                    fill="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        d="M16.24 13.62a.68.68 0 0 1-.37.07.74.74 0 0 1-.36-.12A11.27 11.27 0 0 0 9 11.74a11.27 11.27 0 0 0-6.51 1.83.74.74 0 0 1-.36.12.68.68 0 0 1-.37-.07.65.65 0 0 1-.28-.24.67.67 0 0 1-.1-.34v-2.27a13.82 13.82 0 0 1 15.24 0V13a.67.67 0 0 1-.1.34.65.65 0 0 1-.28.28ZM7.43 1.46a13.1 13.1 0 0 0-2.5 6.26A15 15 0 0 0 1.38 9.2v-.72A7 7 0 0 1 3.09 4a7.68 7.68 0 0 1 4.34-2.54ZM9 1.65a12.06 12.06 0 0 1 2.63 5.75 15.48 15.48 0 0 0-5.26 0A12.1 12.1 0 0 1 9 1.65Zm7.62 6.83v.72a15 15 0 0 0-3.55-1.48 13.1 13.1 0 0 0-2.5-6.26A7.68 7.68 0 0 1 14.91 4a7 7 0 0 1 1.71 4.48ZM9 0a9.28 9.28 0 0 0-6.36 2.49A8.22 8.22 0 0 0 0 8.48V13a1.92 1.92 0 0 0 .61 1.39 2.18 2.18 0 0 0 1.47.61 2.1 2.1 0 0 0 1.22-.38A9.94 9.94 0 0 1 9 13a9.94 9.94 0 0 1 5.7 1.58 2.14 2.14 0 0 0 1.05.37 2.2 2.2 0 0 0 1.11-.2 2.07 2.07 0 0 0 .83-.72A1.89 1.89 0 0 0 18 13V8.48a8.22 8.22 0 0 0-2.64-6A9.28 9.28 0 0 0 9 0Z" />
                                </svg>
                            </span>
                            <h6 class="text-lg font-medium">Call Coach</h6>
                        </div>
                    </div>

                    <div class="mt-6 flex h-full flex-col justify-between gap-4">
                        {index == 0 && <WhatSee setIndex={setIndex} data={pageText} initialCall={initiateCall} twilioDevice={twilioDevice} />}
                        {index == 1 && <WhatHappened setIndex={setIndex} setHappenedIndex={setHappenedIndex} />}
                        {index == 2 && <Schedule1 setPickerInfo={setPickerInfo} setIndex={setIndex} pickerInfo={pickerInfo} formObContact={formObjContact} setFormObjContact={setFormObjContact} />}
                        {index == 3 && <Schedule2 happenedIndex={happenedIndex} setIndex={setIndex} setTimeInfo={setTimeInfo} timeInfo={timeInfo} setFormObjContact={setFormObjContact} formObjContact={formObjContact} />}
                        {index == 4 && <Schedule3 appointment={appointment} happenedIndex={happenedIndex} setIndex={setIndex} toggleIsPlayer={toggleIsPlayer} pickerInfo={pickerInfo} timeInfo={timeInfo} />}
                        {index == 5 && <Schedule4 happenedIndex={happenedIndex} setIndex={setIndex} toggleIsPlayer={toggleIsPlayer} updateDialoutcomes={updateDialOutcomes} />}
                        {index == 6 && <Email1 setIndex={setIndex} setEmailType={setEmailType} />}
                        {index == 7 && <Email2 setIndex={setIndex} formObjContact={formObjContact} emailType={emailType} />}
                        {index == 8 && <Email3 setIndex={setIndex} formObjContact={formObjContact} updateDialoutcomes={updateDialOutcomes} happenedIndex={happenedIndex} />}
                        {index == 9 && (
                            <Referral
                                formObj={formObj}
                                setFormObj={setFormObj}
                                setIndex={setIndex}
                            />
                        )}
                        {index == 10 && (
                            <Referral2
                                formObj={formObj}
                                setFormObj={setFormObj}
                                setIndex={setIndex}
                            />
                        )}
                        {index == 11 && (
                            <Referral3
                                formObj={formObj}
                                setFormObj={setFormObj}
                                setIndex={setIndex}
                            />
                        )}
                        {index == 12 && (
                            <Referral4
                                formObj={formObj}
                                setFormObj={setFormObj}
                                setIndex={setIndex}
                            />
                        )}
                        {index == 13 && (
                            <Referral5
                                formObj={formObj}
                                setFormObj={setFormObj}
                                setIndex={setIndex}
                            />
                        )}
                        {index == 14 && (
                            <Referral6
                                formObj={formObj}
                                setFormObj={setFormObj}
                                setIndex={setIndex} happenedIndex={happenedIndex} updateDialoutcomes={updateDialOutcomes}
                            />
                        )}
                        {index == 15 && <Hungup setIndex={setIndex} happenedIndex={happenedIndex} updateDialoutcomes={updateDialOutcomes} />}
                        {index == 16 && <NotInterested setIndex={setIndex} happenedIndex={happenedIndex} updateDialoutcomes={updateDialOutcomes} />}
                        {index == 17 && <Discard setIndex={setIndex} />}
                        {index == 18 && <CommonDiscard setIndex={setIndex} />}
                        {index == 19 && <Appointment setIndex={setIndex} setAppointment={setAppointment} />}
                    </div>
                </div>
            </div>
            <div className="fixed -bottom-16  w-full ">
                {/* {showWave && (
          <img
            src={wave}
            className="pointer-events-none fixed inset-x-0 -bottom-20 z-10  h-[200px] w-full md:-bottom-16 md:h-[200px] lg:left-auto lg:w-[calc(100%-290px)]"
          />
        )} */}
            </div>
            <BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
                <div
                    id="edit-contact-modal"
                    className="hs-overlay pointer-events-none fixed start-0 top-8 z-[60]  h-full w-full overflow-y-auto overflow-x-hidden"
                >
                    <div
                        class="m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
                        <div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
                            <div
                                class="flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3">
                                <h5 class="text-xl font-semibold">Contact Information</h5>
                                <button
                                    type="button"
                                    class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    data-hs-overlay="#edit-contact-modal"
                                    onClick={handleClose}
                                >
                                    <span class="sr-only">Close</span>
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
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div class="overflow-y-auto p-5">
                                <form action="" class="">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                            <div className="relative">
                                                <input type={"hidden"} name={"contactId"}
                                                       value={formObjContact.contactId}/>
                                                <input
                                                    type="text"
                                                    id="company-name"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Company Name"
                                                    name="company"
                                                    value={formObjContact.company}
                                                    autoFocus={true}
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="company-name"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Company Name
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="contact-name"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Contact Name"
                                                    value={formObjContact.contact}
                                                    name="contact"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="contact-name"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Contact Name
                                                </label>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="title"
                                                className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                placeholder="Title"
                                                value={formObjContact.title}
                                                name="title"
                                                onChange={handleChangeContact}

                                            />
                                            <label
                                                htmlFor="title"
                                                className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                            >
                                                Title
                                            </label>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="industry"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Industry"
                                                    value={formObjContact.industry}
                                                    name="industry"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="industry"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Industry
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="timezone"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Time Zone"
                                                    value={formObjContact.time}
                                                    name="time"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="timezone"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Time Zone
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="address"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Contact Address"
                                                    value={formObjContact.address}
                                                    name="address"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="address"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Contact Address
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="city"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="City"
                                                    value={formObjContact.city}
                                                    name="city"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="city"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    City
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="state"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="State"
                                                    value={formObjContact.state}
                                                    name="state"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="state"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    State
                                                </label>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-1">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="website"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Website"
                                                    value={formObjContact.website}
                                                    name="website"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="website"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Website
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="Email"
                                                    value={formObjContact.email}
                                                    name="email"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="linkedin"
                                                    className="peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                                                    placeholder="LinkedIn"
                                                    value={formObjContact.linkedin}
                                                    name="linkedin"
                                                    onChange={handleChangeContact}
                                                />
                                                <label
                                                    htmlFor="linkedin"
                                                    className="pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
                                                >
                                                    LinkedIn
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                </form>
                            </div>

                            <div class="flex items-center justify-between p-4">
                                <button
                                    data-hs-overlay="#edit-contact-modal"
                                    type="button"
                                    class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </button>

                                <button
                                    data-hs-overlay="#edit-contact-modal"
                                    type="button"
                                    class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg"
                                    onClick={handleSubmitContact}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicModal>
            <BasicModal
                open={open2}
                handleClose={handleClose2}
                handleOpen={handleOpen2}
            >
                <div
                    id="search-modal"
                    class="hs-overlay pointer-events-none fixed start-0 top-8 z-[60]  h-full w-full overflow-y-auto overflow-x-hidden"
                >
                    <div
                        class="m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
                        <div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
                            <div class="px-2 pt-1 text-right">
                                <button
                                    onClick={handleClose2}
                                    type="button"
                                    class="inline-flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    data-hs-overlay="#search-modal"
                                >
                                    <span class="sr-only">Close</span>
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
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="overflow-y-auto p-4">
                                <input
                                    type="text"
                                    id="input-label" name={"search"}
                                    class="block w-full rounded-lg border-2 border-secondary/20 px-4 py-3 text-lg font-medium transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    placeholder={"Search by Contact Name"}
                                    autoFocus={true}
                                    onChange={handleChangeSearch}
                                />

                                <div class="mt-6">
                                    <DataTable
                                        columns={tableColumns}
                                        data={searchResults}
                                        highlightOnHover
                                        responsive
                                        onRowClicked={handleRowClicked}
                                    />
                                    {/*<DataTable columns={tableColumns} data={searchResults}/>*/}
                                    <p class="mb-2 font-medium">Reason for search:</p>
                                    <div class="flex flex-wrap items-center gap-2">
                                        <button
                                            type="button"
                                            class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                                        >
                                        Inbound Call
                                        </button>
                                        <button
                                            type="button"
                                            class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                                        >
                                            Reschedule
                                        </button>
                                        <button
                                            type="button"
                                            class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                                        >
                                            Callback
                                        </button>
                                        <button
                                            type="button"
                                            class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm"
                                        >
                                            Confirmation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicModal>
            <BasicModal
                open={open3}
                handleClose={handleClose3}
                handleOpen={handleOpen3}
            >
                <div
                    id=""
                    class="absolute left-[50%] top-8 -translate-x-[50%] cursor-move"
                >
                    {" "}
                    <Draggable cancel={"textarea"}>
                        <div
                            class="m-3 flex justify-center mt-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
                            <div
                                class="md:w-[576px] sm:w-[300px] pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
                                <div
                                    class="flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3">
                                    <h5 class="text-xl font-semibold">Call Notes</h5>
                                    <button
                                        onClick={handleClose3}
                                        type="button"
                                        class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        data-hs-overlay="#call-notes-modal"
                                    >
                                        <span class="sr-only">Close</span>
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
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="overflow-y-auto p-4">
                                    <input type={"hidden"} name={"leadId"} value={formObjNotes.leadId} />
                                    <input type={"hidden"} name={"tenantId"} value={formObjNotes.tenantId} />
                                    <textarea
                                        name="callNotes"
                                        id="caller-notes-area"
                                        rows="5"
                                        class="block w-full rounded-lg border-2 border-secondary/20 px-4 py-3 text-lg font-medium transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                        placeholder="Start typing here..."
                                        autoFocus={true}
                                        onChange={handleChangeNotes}
                                        value={formObjNotes.callNotes}
                                    >{formObjNotes.callNotes}</textarea>
                                </div>

                                <div class="flex items-center justify-between p-4">
                                    <button
                                        onClick={handleTimeStamps}
                                        type="button"
                                        class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Time Stamp
                                    </button>

                                    <button
                                        onClick={(e) => { handleClose3(e); handleSubmitNotes(e) }}
                                        data-hs-overlay="#call-notes-modal"
                                        type="button"
                                        class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                </div>
            </BasicModal>
            <BasicModal
                open={open4}
                handleClose={handleClose4}
                handleOpen={handleOpen4}
            >
                <div
                    id="discard-modal"
                    class="hs-overlay pointer-events-none fixed start-0 top-8 z-[60]  h-full w-full overflow-y-auto overflow-x-hidden"
                >
                    <div
                        class="m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl">
                        <div class="pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm">
                            <div
                                class="flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3">
                                <h5 class="text-xl font-semibold">Reasons to discard</h5>
                                <button
                                    onClick={handleClose4}
                                    type="button"
                                    class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    data-hs-overlay="#discard-modal"
                                >
                                    <span class="sr-only">Close</span>
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
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div class="overflow-y-auto p-4">
                                <div class="flex flex-col items-center justify-center gap-4">
                                    <a
                                        onClick={() => { handleHungUp(); setHappenedIndex(7) }}
                                        class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                                    >
                                        Wrong Contact
                                    </a>
                                    <a
                                        onClick={() => { handleHungUp(); setHappenedIndex(7) }}
                                        class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                                    >
                                        Company not in business
                                    </a>
                                    <a
                                        onClick={() => { handleHungUp(); setHappenedIndex(7) }}
                                        class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                                    >
                                        Do not call
                                    </a>
                                    <a
                                        onClick={() => { handleHungUp(); setHappenedIndex(7) }}
                                        class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                                    >
                                        Unsuitable company
                                    </a>
                                    <a
                                        onClick={() => { handleHungUp(); setHappenedIndex(7) }}
                                        class="inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg"
                                    >
                                        Current customer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicModal>
        </ManagerDashboard>
    );
};

export default CallProcessing;