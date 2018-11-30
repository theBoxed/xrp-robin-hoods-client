import React from 'react';
import './floatingButton.css';


export default function FloatingButton(props) {
  return (
    <div className="float">
      <a
        amount="0.5"
        title="Tip Me"
        size="250"
        to="theCryptoDonut"
        network="twitter"
        href="https://www.xrptipbot.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        </a>
    </div>
  );
}

