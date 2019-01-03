import React from 'react';
import LeaderBoardPromo from '../components/charts/leaderboardPromo';
import Title from '../components/sectionTitles/title';
import LeaderboardTable from '../components/charts/leaderboardTable';


export default function App(props) {
  return (
    <div className="layout">
      <div className="layout">
        <div className="layout-content">
          <div className="main-content">
            {/* CREATE COMPONENT? */}
            <div>
              <Title title={'All-Time'} button={false} />
              <div className="row">
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="all"
                    type="TipsSentLeaders"
                    description="Tips Sent Leader"
                    subtitle="tips"
                  />
                  <LeaderboardTable period="all" type="TipsSentLeaders" />
                </div>
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="all"
                    type="TipsReceivedLeaders"
                    description="Tips Received Leader"
                    subtitle="tips"
                    
                  />
                  <LeaderboardTable period="all" type="TipsReceivedLeaders" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="all"
                    type="XrpSentLeaders"
                    description="XRP Sent Leader"
                    subtitle="XRP"
                  />
                  <LeaderboardTable period="all" type="XrpSentLeaders" />
                </div>
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="all"
                    type="XrpReceivedLeaders"
                    description="XRP Received Leader"
                    subtitle="XRP"
                  />
                  <LeaderboardTable period="all" type="XrpReceivedLeaders" />
                </div>
              </div>
              <Title title={'Last Week'} button={false} />
              <div className="row">
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="week"
                    type="TipsSentLeaders"
                    description="Tips Sent Leader"
                    subtitle="Tips"
                  />
                  <LeaderboardTable period="week" type="TipsSentLeaders" />
                </div>
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="week"
                    type="TipsReceivedLeaders"
                    description="Tips Received Leader"
                    subtitle="Tips"
                  />
                  <LeaderboardTable period="week" type="TipsReceivedLeaders" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="week"
                    type="XrpSentLeaders"
                    description="XRP Sent Leader"
                    subtitle="XRP"
                  />
                  <LeaderboardTable period="week" type="XrpSentLeaders" />
                </div>
                <div className="col-lg-6">
                  <LeaderBoardPromo
                    period="week"
                    type="XrpReceivedLeaders"
                    description="XRP Received Leader"
                    subtitle="XRP"
                  />
                  <LeaderboardTable period="week" type="XrpReceivedLeaders" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

