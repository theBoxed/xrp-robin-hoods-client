import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalProps = {
  triggerText: '?',
  ariaLabel: 'Learn more about XRP Robin Hood'
};

const ModalTrigger = ({ onOpen, text }) => (
  <div className="about-button-pos">
    <button className="about-button" onClick={onOpen}>
      {text}
    </button>
  </div>
);

const ModalContent = ({ onClose, role = 'dialog', ariaLabel }) => {
  return ReactDOM.createPortal(
    <aside
      aria-label={ariaLabel}
      aria-modal="true"
      tabIndex="-1"
      role={role}
      className="about-modal-cover"
    >
      <div className="about-modal">
        <button
          className="about-modal-close"
          aria-labelledby="close Modal"
          onClick={onClose}
        >
          <span id="close-modal" className="hide-visually">
            Close
          </span>
          <svg className="about-modal-close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="about-modal-body">
          <h1 className="about-header">Welcome to XRP Robin Hood</h1>
          <hr className="about-line" />
          <h2 className="about-subhead">Background</h2>
          <p>
            To understand XRP Robin Hood, it's important to first understand the
            <a href="https://www.xrptipbot.com/"> XRP Tip Bot</a>, a tool
            created by <a href="https://wietse.com/"> WiesteWind</a>, and allows
            reddit, Twitter, and Discord users to send tips (small amounts of
            XRP) to other users. The act of tipping is to show appreciation for
            helping/sharing information or simply for kindness.
          </p>
          <p>
            To learn more about the XRP Tip Bot,
            <a href="https://www.xrptipbot.com/">
              {' '}
              please check out the website here.
            </a>
          </p>
          <h2 className="about-subhead">XRP Robin Hood</h2>
          <div>
            {' '}
            XRP Robin Hood was developed for a couple of reasons:
            <ol>
              <li>
                To help others visualize the growth and adoption of the tool
                WiesteWind Developed.{' '}
              </li>
              <li>
                To Further promote XRP, the <a href="https://twitter.com/hashtag/xrpcommunity?src=hash">
                  #XRPCommunity </a>, and the <a href="https://twitter.com/xrptipbot"> @XRPTipBot</a>
              </li>
              <li> To show thanks to the #XRPCommunity and its leaders. </li>
            </ol>
          </div>
          <h2 className="about-subhead"> About the App</h2>
          <div>
            {' '}
            The XRP Robin Hood app currently consists of 4 pages:
            <ol>
              <li>
                Homepage - includes a preview into the 3 remaining pages.
              </li>
              <li>
                Last Week - includes XRP Tip Bot usage from the previous week
                and leaderboard information.
              </li>
              <li>
                All-Time - similar to the Last Week Page, but data is from the
                entirety of the XRP Tip Bot.
              </li>
              <li>
                Leaderboard - my personal favorite. This page breaks down the
                top users all-time as well as last week.{' '}
              </li>
            </ol>
          </div>
          <h2 className="about-subhead">Questions or Feedback?</h2>
          <p>
            I plan on continuing to update XRP Robin Hood with new graphics and
            data, but I would love your feedback! So please if you have any
            comments, questions, or see any issues, please let me know via
            Twitter <a href="https://twitter.com/theCryptoDonut">@theCryptoDonut</a>.
          </p>
        </div>
      </div>
    </aside>,
    document.body
  );
};

export default class Modal extends React.Component {
  state = { isOpen: false };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { isOpen } = this.state;
    const { ariaLabel, triggerText, role } = modalProps;
    return (
      <Fragment>
        <ModalTrigger onOpen={this.onOpen} text={triggerText} />
        {isOpen && (
          <ModalContent
            ariaLabel={ariaLabel}
            onClose={this.onClose}
            role={role}
          />
        )}
      </Fragment>
    );
  }
}
