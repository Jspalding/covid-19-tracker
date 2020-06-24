import React from 'react'
import './SideHeader.css';

import GHLogo from "./gh.png";

const SideHeader = props => {

    return (
        <div className="side-header">
            <a
                href="https://github.com/Jspalding"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="gh-logo" src={GHLogo} alt="Github Link" />
            </a>
        </div >
    )
}

export default SideHeader;
