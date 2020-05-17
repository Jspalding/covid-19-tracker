import React from 'react'
import './MobileWrapper.css';

import Particles from 'react-particles-js';

const MobileWrapper = props => {

    return (
        <div className="mobile-wrapper bg-blue-900">
            <div className="mobile-text">
                <h1>COVID-19 Tracker</h1>
                <p className="emoji">😅</p>
                <p>Unfortunately the tracker is currently only available for desktop use.</p>
            </div>
            
            <Particles
                className="mobile-particles"
                width="100vw"
                height="100vh"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        </div>
    )
}

export default MobileWrapper;
