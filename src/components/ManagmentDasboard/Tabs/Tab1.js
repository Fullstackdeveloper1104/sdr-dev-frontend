import React from "react";
import Appointment from "../../Common/Appointment";
import { Dials } from "../../Common/Dials";
import Reaches from "../../Common/Reaches";
import ConnectionRate from "../../Common/ConnectionRate";
import { DialOutcomes } from "../../Common/DialOutcomes";
import { Team } from "../../Common/Team";
import CoversionRate from "../../Common/CoversionRate";
import tab1 from "../../CallerStats/Tabs/Tab1";

const Tab1 = ({tab1TeamMembers, tab1data}) => {
  return (
    <div
      id="todays-stats-tab"
      role="tabpanel"
      aria-labelledby="todays-stats-tab-btn"
    >
      <div class="">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment appointment={tab1data.firstAppt}  progress={tab1data.goalAchieved} />

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials  dials={tab1data.totalDials}/>

            {/* <!-- card 3 --> */}

            <Reaches reaches={tab1data.totalReaches}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate  connectionrate={Math.floor(tab1data.connectionRate*100)} />

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={Math.floor(tab1data.converstionRate*100)}/>
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={tab1data.firstAppt} hungup={tab1data.hungup} callback={tab1data.callback} notinterested={tab1data.notInterested} email={tab1data.email} noanswer={tab1data.noAnswer} referral={tab1data.referral} discard={tab1data.discarded} />


          {/* <!-- card 7 --> */}
          <Team TeamMembers={tab1TeamMembers} />
        </div>
      </div>
    </div>
  );
};

export default Tab1;
