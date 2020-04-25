import React from 'react';
import './Hamburger.css';
import classNames from 'classnames';

function Hamburger({transformed, onClick, styles}) {

    let hambButton = classNames({
      'hamburger': true,
      'transformed': transformed
    });
    let secondLine = classNames({
      'line': true,
      'secondLine': transformed
    });

    return (
      <div>
        <div className={hambButton} onClick={onClick}>
            <div className="line"></div>
            <div className={secondLine}
                style={{animation: styles}}>
            </div>
            <div className="line"></div>
        </div>
      </div>
    )
}

export default Hamburger;
