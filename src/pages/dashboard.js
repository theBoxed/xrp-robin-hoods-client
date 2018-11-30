import React from 'react';
import Scorecard from '../components/charts/Scorecard';
import LeaderBoardPromo from '../components/charts/leaderboardPromo';
import Title from '../components/sectionTitles/title';
import FloatingButton from '../components/buttons/floatingButton';

export default function Dashboard(props) {
  return (
    <div className="layout">
      <div className="layout-content">
        <div className="main-content">
          <div>
            <Title title={'All-Time'} button={true} />
            <Scorecard period="all" type="dashboard" />
            <Title title={'Last-Week'} button={true} />
            <Scorecard period="week" type="dashboard" />
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
          <FloatingButton />
        </div>
      </div>
    </div>
  );
}
