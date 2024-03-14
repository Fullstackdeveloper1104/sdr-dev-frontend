import React, {useEffect, useState} from 'react'
import Appointment from '../../Common/Appointment'
import { Dials } from '../../Common/Dials'
import Reaches from '../../Common/Reaches'
import ConnectionRate from '../../Common/ConnectionRate'
import CoversionRate from '../../Common/CoversionRate'
import { Team } from '../../Common/Team'
import { DialOutcomes } from '../../Common/DialOutcomes'
import moment from "moment";

const Tab3 = () => {
    const [tab3data, setTab3data] = useState({
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
    const [tab3TeamMembers, setTab3TeamMembers] = useState([{
        name: "",
        FullName: '',
        AvatarLink: false,
    }
    ]);
    useEffect(() => {
        const today = moment();
        const thisMonthStart = today.clone().startOf('month').format('YYYY-MM-DD');
        const thisMonthEnd = today.clone().endOf('month').format('YYYY-MM-DD');
        fetch("/mdashboarddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                startDate:thisMonthStart,
                endDate:thisMonthEnd,
                reportType:"monthly"



            })

        }).then((response) => {
            if (response.status === 200) {
                // console.log("Success");
                response.json().then((data) => {
                    console.log(data);
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
                    else {
                        setTab3TeamMembers(data.dashboardData.query1);
                    }
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
                        const combinedAppointmentGoal = data.dashboardData.query1.reduce((total, member) => total + member.AppointmentGoal, 0);
                        console.log(combinedAppointmentGoal);
                        if(data.dashboardData.query2[0].AppointmentGoal!==0 && combinedAppointmentGoal!==0){
                            goalAchieved = Math.floor((data.dashboardData.query2[0].FirstAppt/combinedAppointmentGoal)*100);
                        }
                        // console.log(goalAchieved)
                        setTab3data({
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


                })
            } else if(response.status === 401){
                window.location.href = "/login";
            }else if(response.status === 302){
                window.location.href = "/caller-dashboard";
            }
            else{
                console.log("Error");
            }
        });
    }, []);
  return (
    <div
            id="this-month-tab"
            role="tabpanel"
            aria-labelledby="this-month-tab-btn"
          >
            <div class="">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment  appointment={tab3data.firstAppt} progress={tab3data.goalAchieved}/>

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={tab3data.totalDials}/>

            {/* <!-- card 3 --> */}

            <Reaches reaches={tab3data.totalReaches}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate connectionrate={Math.floor(tab3data.connectionRate*100)}/>

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={Math.floor(tab3data.converstionRate*100)}  />
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={tab3data.firstAppt} hungup={tab3data.hungup} callback={tab3data.callback} notinterested={tab3data.notInterested} email={tab3data.email} noanswer={tab3data.noAnswer} referral={tab3data.referral} discard={tab3data.discarded} />


          {/* <!-- card 7 --> */}
          <Team TeamMembers={tab3TeamMembers}/>
        </div>
            </div>
          </div>
  )
}

export default Tab3