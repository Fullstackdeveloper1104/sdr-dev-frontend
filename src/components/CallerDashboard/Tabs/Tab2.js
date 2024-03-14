import React, {useEffect, useState} from 'react'
import YourProfile from '../../Common/YourProfile'
import { Dials } from '../../Common/Dials'
import Appointment from '../../Common/Appointment'
import ConnectionRate from '../../Common/ConnectionRate'
import CoversionRate from '../../Common/CoversionRate'
import { DialOutcomes } from '../../Common/DialOutcomes'
import Reaches from '../../Common/Reaches'
import moment from "moment";
import {toast} from "react-toastify";
import { CircularProgress } from '@mui/material'
import {tab} from "@testing-library/user-event/dist/tab";

const Tab2 = () => {
    const [tab2data, setTab2data] = useState({
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
    const [isLoading,setIsLoading] = useState(false);
    const [tab2ProfileData, setTab2ProfileData] = useState({
        activeSince: '',
        fullName: '',
        location: '',
        reportsTo: '',
        avatarLink:''
    })

    useEffect(() => {
        const today = moment();
        const thisWeekStart = today.clone().startOf('week').format('YYYY-MM-DD');
        const thisWeekEnd = today.clone().endOf('week').format('YYYY-MM-DD');
        fetch('/cdashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startDate: thisWeekStart,
                endDate: thisWeekEnd,
                reportType: "weekly",
            })


        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    if(data.dashboardData.query2.length===0){
                        // toast.error('No data found for this week', {
                        //     position: "top-right",
                        //     autoClose: 5000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        // })
                    }else {
                        let goalAchieved =0;
                        if(data.dashboardData.query1[0].AppointmentGoal!==0 && data.dashboardData.query2[0].FirstAppt!==0){
                            goalAchieved = Math.floor((data.dashboardData.query2[0].FirstAppt/data.dashboardData.query1[0].AppointmentGoal)*100);
                        }
                        setTab2data({
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
                    }else{
                        setTab2ProfileData({
                            activeSince: data.dashboardData.query1[0].ActiveSince,
                            fullName: data.dashboardData.query1[0].CallerFullName,
                            location: data.dashboardData.query1[0].Location,
                            reportsTo: data.dashboardData.query1[0].ReportsTo,
                            avatarLink: data.dashboardData.query1[0].AvatarLink,
                        })
                    }
                });
                setIsLoading(false);
            }
            else if(response.status===401){
                window.location.href = '/login'

            }
            else {
                console.log('Failed')
            }

        })
    }, []);

  return (
    <div id="this-week-tab" role="tabpanel" aria-labelledby="this-week-tab-btn">
    <div class="">
    <div class={"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4"}>
          {/* <!-- card 1 --> */}
          <Appointment  appointment={tab2data.firstAppt} progress={tab2data.goalAchieved}/>

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={tab2data.totalDials}/>

            {/* <!-- card 3 --> */}

            <Reaches  reaches={tab2data.totalReaches}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate  connectionrate={Math.floor(tab2data.connectionRate*100)}/>

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={Math.floor(tab2data.converstionRate*100)}/>
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={tab2data.firstAppt} hungup={tab2data.hungup} callback={tab2data.callback} notinterested={tab2data.notInterested} email={tab2data.email} noanswer={tab2data.notInterested} referral={tab2data.referral} discard={tab2data.discarded} />


          {/* <!-- card 7 --> */}
          <YourProfile avatarLink ={tab2ProfileData.avatarLink} location={tab2ProfileData.location} fullname={tab2ProfileData.fullName} activesince={tab2ProfileData.activeSince} reportsto={tab2ProfileData.reportsTo} />
        </div>
    </div>
  </div>
  )
}

export default Tab2