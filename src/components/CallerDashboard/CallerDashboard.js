import React, {useEffect, useState} from 'react'
import Dashboard from '../../pages/Dashboard'
import { Tab1 } from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import { Tab3 } from './Tabs/Tab3';
import ManagerDashboard from '../../pages/CallerDashboard';
import moment from "moment";
import {toast, ToastContainer} from "react-toastify";

const CallerDashboard = () => {
  const [tab1data, setTab1data] = useState({
    callback: 0,
    connectionRate: 0,
    converstionRate:0,
    discarded: 0,
    email: 0,
    firstAppt: 0,
    hungup: 0,
    noAnswer: 0,
    notInterested: 0,
    referral: 0,
    totalDials: 0,
    totalReaches: 0,
    goalAchieved: 0
  });
  const [websiteUrl,setWebSiteUrl] = useState('');
  const [tab1ProfileData, setTab1ProfileData] = useState({
      activeSince: '',
      fullName: '',
      location: '',
      reportsTo: '',
      avatarLink:false,
  })

    useEffect(() => {
        const today = moment();
        const todayFormatted = today.format('YYYY-MM-DD');

        fetch('/cdashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startDate: todayFormatted,
                endDate: todayFormatted,
                reportType: "daily",
            })


        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    console.log(data)
                    // console.log(data.dashboardData.query2[0])
                    if(data.dashboardData.query2.length===0){
                        // toast.error('No data found for today', {
                        //     position: "top-right",
                        //     autoClose: 5000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        // })
                    }
                    else {
                        let goalAchieved =0;
                        if(data.dashboardData.query1[0].AppointmentGoal!==0 && data.dashboardData.query2[0].FirstAppt!==0){
                        goalAchieved = Math.floor((data.dashboardData.query2[0].FirstAppt/data.dashboardData.query1[0].AppointmentGoal)*100);
                        }
                        // console.log(goalAchieved)
                        setTab1data({
                            callback: data.dashboardData.query2[0].Callback,
                            connectionRate: data.dashboardData.query2[0].ConnectionPerc,
                            converstionRate: data.dashboardData.query2[0].ConversionRate,
                            discarded: data.dashboardData.query2[0].Discarded,
                            email: data.dashboardData.query2[0].Email,
                            firstAppt: data.dashboardData.query2[0].FirstAppt,
                            hungup: data.dashboardData.query2[0].HangUp,
                            noAnswer: data.dashboardData.query2[0].NoAns,
                            notInterested: data.dashboardData.query2[0].NotInterested,
                            referral: data.dashboardData.query2[0].Referral,
                            totalDials: data.dashboardData.query2[0].TotalDials,
                            totalReaches: data.dashboardData.query2[0].TotalReaches,
                            goalAchieved: goalAchieved
                        })
                    }
                    if(data.dashboardData.query1.length===0) {
                        // toast.error('No data found for Profile', {
                        //     position: "top-right",
                        //     autoClose: 5000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        // })
                    }
                    else{
                        setTab1ProfileData({
                            activeSince: data.dashboardData.query1[0].ActiveSince,
                            fullName: data.dashboardData.query1[0].CallerFullName,
                            location: data.dashboardData.query1[0].Location,
                            reportsTo: data.dashboardData.query1[0].ReportsTo,
                            avatarLink: data.dashboardData.query1[0].AvatarLink,

                        })
                        // console.log(tab1ProfileData)
                    }
                })
            }
            else if(response.status===401){
                window.location.href = '/login'

            }
            else {
                console.log('Failed')
            }
        });
        fetch("/call-options", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(r => {
            if (r.ok) {
                r.json().then(data => {
                  const url = data?.callOptions[0]?.Website;

                    if (url === null || url === undefined || url === "") {
                        // url = ''; // Set url to an empty string
                        setWebSiteUrl('');
                    } else if (!url.includes('https://') && !url.includes('http://')) {
                        // If url doesn't start with 'https://' or 'http://', prepend 'https://'
                        setWebSiteUrl(`https://${url}`);
                    }
                })
            } 
        })
    }, []);
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <ManagerDashboard websiteUrl = {websiteUrl}>
        <ToastContainer/>
    {" "}
    <div class="border-b border-gray-200">
      <nav
        class="flex space-x-4 lg:space-x-8"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          class={`${tabIndex==0 && "active"} inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary`}
          id="todays-stats-tab-btn"
          data-hs-tab="#todays-stats-tab"
          aria-controls="todays-stats-tab"
          onClick={() => setTabIndex(0)}
          role="tab"
        >
          Today's Stats
        </button>
        <button
          type="button"
          class={`${tabIndex==1 && "active"} inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary`}
          id="this-week-tab-btn"
          data-hs-tab="#this-week-tab"
          aria-controls="this-week-tab"
          onClick={() => setTabIndex(1)}
          role="tab"
        >
          This Week
        </button>
        <button
          type="button"
          class={`${tabIndex==2 && "active"} inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary`}
          id="this-month-tab-btn"
          data-hs-tab="#this-month-tab"
          aria-controls="this-month-tab"
          onClick={() => setTabIndex(2)}
          role="tab"
        >
          This Month
        </button>
      </nav>
    </div>
    {/* <!-- Tab contents --> */}
    <div class="mt-8 flex-1">
      {tabIndex == 0 && (
      <Tab1 tab1data={tab1data} tab1ProfileData={tab1ProfileData} />
      )}

      {tabIndex == 1 && (
      <Tab2/>
      )}

      {tabIndex == 2 && (
      <Tab3/>
      )}
    </div>

  
  </ManagerDashboard>
  )
}

export default CallerDashboard