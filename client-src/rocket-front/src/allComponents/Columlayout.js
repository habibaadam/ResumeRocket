import React from 'react'
import '../allStyles/manual.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQuestionCircle, faUserPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

export default function Columlayout() {
    return (
        <div className="how-it-works-container">
            <div className="steps-wrapper">
                {/* Step 1 */}
                <div className="step-card" data-aos="fade-up" data-aos-duration="800">
                    <div className="step-number">01</div>
                    <div className="step-icon-wrapper">
                        <FontAwesomeIcon icon={faPlay} className="step-icon" />
                    </div>
                    <h3 className="step-title">Get Started</h3>
                    <p className="step-description">
                        Click on the GetStarted button which will lead you to a registering form for
                        an easy and seamless sign up.
                    </p>
                    <div className="step-connector"></div>
                </div>

                {/* Step 2 */}
                <div
                    className="step-card"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                >
                    <div className="step-number">02</div>
                    <div className="step-icon-wrapper">
                        <FontAwesomeIcon icon={faUserPlus} className="step-icon" />
                    </div>
                    <h3 className="step-title">Register Account</h3>
                    <p className="step-description">
                        Provide simple account details and tap on the register button with a secure,
                        unforgettable password.
                    </p>
                    <div className="step-connector"></div>
                </div>

                {/* Step 3 */}
                <div
                    className="step-card"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                >
                    <div className="step-number">03</div>
                    <div className="step-icon-wrapper">
                        <FontAwesomeIcon icon={faQuestionCircle} className="step-icon" />
                    </div>
                    <h3 className="step-title">Answer Questions</h3>
                    <p className="step-description">
                        Questions relevant to resume generations are asked by our AI. Make sure to
                        answer precisely in a conversational manner.
                    </p>
                    <div className="step-connector"></div>
                </div>

                {/* Step 4 */}
                <div
                    className="step-card"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                >
                    <div className="step-number">04</div>
                    <div className="step-icon-wrapper">
                        <FontAwesomeIcon icon={faFileAlt} className="step-icon" />
                    </div>
                    <h3 className="step-title">Generate & Download</h3>
                    <p className="step-description">
                        At the end of all questions, tap on the generate cv button and wait 2-3 mins
                        max to have your cv downloaded automatically!
                    </p>
                </div>
            </div>
        </div>
    )
}
