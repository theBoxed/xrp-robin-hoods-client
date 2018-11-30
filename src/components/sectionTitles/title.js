import React from 'react';
import './title.css';
import { BrowserRouter as Link } from 'react-router-dom';

export default function Title(props) {
  const { title } = props;
  return (
    <div className="section-title">
      <span className="text-upper font-16"> {title} </span>
      <Link to={`/${title}`}>
        <a id={`title-${title}-${props.children}`} href={`/${title}`}>
        {props.button !== false && (
          <button aria-label={`Navigate to ${title}`} className="button">
            View All
            </button>
        )}
        </a>
      </Link>
    </div>
  );
};



