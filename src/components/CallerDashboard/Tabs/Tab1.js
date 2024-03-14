import React, { useEffect } from 'react'
import Appointment from '../../Common/Appointment'
import { Dials } from '../../Common/Dials'
import Reaches from '../../Common/Reaches'
import ConnectionRate from '../../Common/ConnectionRate'
import { DialOutcomes } from '../../Common/DialOutcomes'
import { Team } from '../../Common/Team'
import YourProfile from '../../Common/YourProfile'
import CoversionRate from '../../Common/CoversionRate'
import {tab} from "@testing-library/user-event/dist/tab";

export const Tab1 = ({tab1data, tab1ProfileData}) => {
  return (
    <div
      id="todays-stats-tab"
      role="tabpanel"
      aria-labelledby="todays-stats-tab-btn"
    >
      <div class="">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment  appointment={tab1data.firstAppt} progress={tab1data.goalAchieved}/>

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={tab1data.totalDials}/>

            {/* <!-- card 3 --> */}

            <Reaches  reaches={tab1data.totalReaches}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate  connectionrate={Math.floor(tab1data.connectionRate*100)}/>

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={Math.floor(tab1data.converstionRate*100)}/>
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={tab1data.firstAppt} hungup={tab1data.hungup} callback={tab1data.callback} notinterested={tab1data.notInterested} email={tab1data.email} noanswer={tab1data.noAnswer} referral={tab1data.referral} discard={tab1data.discarded} />

          {/* <!-- card 7 --> */}
          <YourProfile location={tab1ProfileData.location} activesince={tab1ProfileData.activeSince} reportsto={tab1ProfileData.reportsTo} fullname={tab1ProfileData.fullName} avatarLink={tab1ProfileData?.avatarLink} />
        </div>
      </div>
    </div>
  )
}
