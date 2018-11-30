import React from 'react';
import Scorecard from '../components/charts/Scorecard';
import LeaderBoardPromo from '../components/charts/leaderboardPromo';
import Title from '../components/sectionTitles/title';

export default function App(props) {
  return (
    <div className="layout">
      <div className="layout-content">
        <div className="main-content">
          <div>
            <Title title={'all-time'} button={false} />
            <Scorecard period="all" type="dashboard" />
            <Scorecard period="all" type="tippers" />
            <Title title={'leaderboard'} />
            <div className="row">
              <div className="col-md-6">
                <LeaderBoardPromo
                  period="all"
                  description="All-Time Most Tips Sent"
                  userType="user"
                  sumOrCount="count"
                  type="TipsSentLeaders"
                />
              </div>
              <div className="col-md-6">
                <LeaderBoardPromo
                  period="all"
                  description="All-Time Most Tips Recieved"
                  userType="to"
                  sumOrCount="xrp"
                  type="TipsReceivedLeaders"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
