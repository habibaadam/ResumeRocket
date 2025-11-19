import React from 'react'
import '../allStyles/animatedRocket.css'

export default function AnimatedRocket() {
    return (
        <div className="rocket-container">
            <div className="rocket">
                <div className="rocket-body">
                    <div className="rocket-window"></div>
                </div>
                <div className="rocket-fin rocket-fin-left"></div>
                <div className="rocket-fin rocket-fin-right"></div>
                <div className="rocket-exhaust">
                    <div className="exhaust-flame"></div>
                    <div className="exhaust-smoke"></div>
                </div>
            </div>
            <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
        </div>
    )
}
