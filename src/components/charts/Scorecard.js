//TODO: Figure out why All-Time Charts are backwards.

import React from 'react';
import { connect } from 'react-redux';
import { fetchScorecardData } from '../../actions/scorecard';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import './scorecard.css';

class Scorecard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchScorecardData(this.props.period));
  }

  createCard() {
    if (this.props[this.props.type] !== null && !this.props.loading) {
      return this.props[this.props.type].map((val, index) => (
        <div key={index} className="col-xl-4">
          <div className="card scorecard">
            {val && (
              <div className="chart">
                <Sparklines width={150} height={170} data={val.series}>
                  <SparklinesCurve color="blue" width={120} height={170} />
                </Sparklines>
              </div>
            )}
            {val.total && <div className="amount">{val.total}</div>}
            {val.title && <div className="title">{val.title}</div>}
          </div>
        </div>
      ));
    }
  }

  rerender() {
    return <div className="row">{this.createCard()}</div>;
  }
  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    } else {
      return this.rerender();
    }
  }
}

Scorecard.defaultProps = {
  data: [],
  sparkline: {
    width: 120,
    height: 107,
    colors: {
      area: 'rgba(199, 228, 255, 0.5)',
      line: '#004585'
    }
  }
};

//TODO: Fix how this data is being mapped.
const mapStateToProps = (state, props) => ({
  loading: state.tipsReducer.loading,
  errors: state.tipsReducer.errors,
  dashboard: [
    {
      title: 'Total XRP Tipped',
      total: state.tipsReducer[props.period + 'TotalXrp']
        ? Number(state.tipsReducer[props.period + 'TotalXrp']).toFixed(0)
        : 0,
      series: state.tipsReducer[props.period + 'XrpSeries']
        ? state.tipsReducer[props.period + 'XrpSeries']
        : []
    },
    {
      title: 'Total Tips',
      total: state.tipsReducer[props.period + 'TotalTips']
        ? Number(state.tipsReducer[props.period + 'TotalTips'])
        : 0,
      series: state.tipsReducer[props.period + 'XrpSeries']
        ? state.tipsReducer[props.period + 'TipsSeries']
        : []
    },
    {
      title: 'Total Tippers',
      total: state.tipsReducer[props.period + 'Tippers']
        ? Number(state.tipsReducer[props.period + 'Tippers'])
        : 0
    }
  ],
  tippers: [
    {
      title: 'Total Recipients',
      total: state.tipsReducer[props.period + 'Recipients']
        ? Number(state.tipsReducer[props.period + 'Recipients'])
        : 0,
      series: []
    },
    {
      title: 'New Tippers',
      total: state.tipsReducer[props.period + 'NewTippers']
        ? Number(state.tipsReducer[props.period + 'NewTippers'])
        : 0,
      series: []
    },
    {
      title: 'New Recipients',
      total: state.tipsReducer[props.period + 'NewRecipients']
        ? Number(state.tipsReducer[props.period + 'NewRecipients'])
        : 0
    }
  ],
  period: props.period
});

export default connect(mapStateToProps)(Scorecard);
