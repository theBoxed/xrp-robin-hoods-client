import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Leaderboard from './pages/leaderboard';
import TopBar from './components/header/topbar';
import AllTime from './pages/allTime';
import LastWeek from './pages/lastWeek';
import GA from './components/GA';

export default function App(props) {  
  return (
    <Router>
      <div className="layout">
        <TopBar />
        <main role="main">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/all-time" component={AllTime} />
          <Route exact path="/last-week" component={LastWeek} />
          <GA />
        </main>
      </div>
    </Router>
  );
}
