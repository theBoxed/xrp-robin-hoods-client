import React from 'react';
import { connect } from 'react-redux';
import { fetchLeaderboardData } from '../../actions/leaderboard';
import './leaderboardPromo.css';

class LeaderboardPromo extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchLeaderboardData(
        this.props.period,
        this.props.userType,
        this.props.component,
        this.props.sumOrCount
      )
    );
  }

  render() {
    const { username, network, value } = this.props.user;
    const { description } = this.props;
    const photo =
      'https://findicons.com/files/icons/2799/flat_icons/256/trophy_star.png';
    const type = ['xrp', 'tips'];

    return (
      <div className="card withShadow leaderBoardCard">
        {description && <span className="description">{description}</span>}
        {photo && (
          <div className="photo">
            <img src={photo} alt="leaderboard icon" />
          </div>
        )}
        {username && <span className="userName">{username}</span>}
        {network && <span className="network">{network}</span>}
        {value && <span className="value">{value.toFixed(0)}</span>}
        {type && <span className="type">{type[1]}</span>}
      </div>
    );
  }
}

LeaderboardPromo.defaultProps = {
  user: {
    photo: '',
    username: '',
    network: '',
    value: null
  },
  type: ''
};

const mapStateToProps = (state, props) => ({
  loading: state.leaderboardReducer.loading,
  errors: state.leaderboardReducer.errors,
  user: state.leaderboardReducer[props.period + props.type]
    ? state.leaderboardReducer[props.period + props.type][0]
    : {}
});

export default connect(mapStateToProps)(LeaderboardPromo);
