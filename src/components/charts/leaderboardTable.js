import React from 'react';
import { connect } from 'react-redux';
import { fetchLeaderboardData } from '../../actions/leaderboard';
import './leaderboardTable.css';


class LeaderboardTable extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchLeaderboardData(this.props.period));
  }

  render() {
    let rows = [];
    let length = this.props.leaders.length;
    let data = this.props.leaders;

    for (let i = 0; i < length; i++) {
      let rowID = `rows${i}`;
      let cell = [];
      for (let item in data[i]) {
        let cellID = `cell${i}-${data[i][item]}`;
        let obj = data[i][item];
        cell.push(
          <td key={cellID} id={cellID}>
            {obj}
          </td>
        );
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell.reverse()}
        </tr>
      );
    }

    return (
      <div className="card">
        <div className="card-header">
          <div className="leaderboard-table-title">Top 10 Leaderboard</div>
          <hr />
        </div>
        <div className="card-body">
          <div className="table">
            <div className="table-body">
              <table className="simple-table" id={`${this.props.period}- ${this.props.type}`}>
                <thead className="table-head">
                  <tr>
                    <th>
                      <span>Name</span>
                    </th>
                    <th>
                      <span>Network</span>
                    </th>
                    <th>
                      <span>Amount</span>
                    </th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaderboardTable.defaultProps = {};

const mapStateToProps = (state, props) => ({
  loading: state.leaderboardReducer.loading,
  errors: state.leaderboardReducer.errors,
  leaders: state.leaderboardReducer[props.period + props.type]
    ? state.leaderboardReducer[props.period + props.type]
    : []
});

export default connect(mapStateToProps)(LeaderboardTable);
