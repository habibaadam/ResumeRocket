import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import '../allStyles/rocket.css'
import Logout from './Logout'
import PdfGenerator from './pdfGenerator'
import logo from '../images/resume_rocket.png'
import { Link, useParams } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../app/ui/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faRocket, faBars } from '@fortawesome/free-solid-svg-icons'
import { RocketIcon } from '@radix-ui/react-icons'
import { ReactTyped } from 'react-typed'

export default function Rocket() {
    const { firstName } = useParams()
    const { user } = useContext(UserContext)
    const [currentQindex, setcurrentQindex] = useState(0)
    const [answer, setAnswer] = useState([])
    const [joinedA, setJoinedA] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [readyButton, setReadyButton] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const questions = [
        'Can we start by giving me your official first name?',
        'And your official last name?',
        'Great! Which specific role in software engineering are you interested in?',
        'Kindly provide a short summary of what you can do and a company culture you prefer?',
        "Do you perhaps own a degree? If yes provide the name of the university, your major, and year of graduation, if No, type 'No, i do not own any degree yet'",
        'If you answered with a no degree, what then has been your source of education and studies? It could be a training/bootcamp/self learning. Feel free to tell me!',
        "Enlighten me on your technology stack and specifiy how familiar you are with each of them. For eg 'My technology stack includes Python(Intermediate), Javascript(Expert) ...'",
        'Are you familiar with version control systems(Git)?',
        'Have you worked with relational databases(MySQL) or non relational databases? If yes, list them',
        'Any familiarity with cloud platforms(GCP, Azure, AWS)?',
        'Explain or talk about some of your projects, experiences, or academic work. Do not forget to tell me the timeframes with each of them',
        'Sounds like you have been putting in the work! Do you own any kind of certifications? Tell me the names of the providers and year you got them. No pressure if you do not own any!',
        'List some of your soft or non technical skills please, then Generate Your CV :)',
    ]

    const handleAnswer = async () => {
        const textarea = document.getElementById('answer')
        const currentA = textarea.value + '.'

        if (currentA.length < 15) {
            setErrorMessage(
                'Invalid answer sent, please answer in sentences => "My first name is <your first name">. All answers need to be in that format'
            )
            textarea.value = ''
            return
        }
        setErrorMessage(null)

        setAnswer((previousA) => [...previousA, currentA])
        textarea.value = ''

        if (currentQindex < questions.length - 1) {
            setcurrentQindex(currentQindex + 1)
        } else {
            const answersJoined = [...answer, currentA].join(' ')
            setJoinedA(answersJoined)
            console.log(answersJoined)
            setReadyButton(true)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleAnswer()
        }
    }

    return (
        <div className="rocket-app">
            {/* Sidebar */}
            <aside className={`rocket-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo">
                        <RocketIcon className="sidebar-logo-icon" />
                        <span>ResumeRocket</span>
                    </Link>
                </div>

                <div className="sidebar-user">
                    <Avatar className="sidebar-avatar">
                        <AvatarImage src="hh" />
                        <AvatarFallback>
                            <span>{user.initials}</span>
                        </AvatarFallback>
                    </Avatar>
                    <div className="sidebar-user-info">
                        <p className="sidebar-user-name">{firstName}</p>
                        <p className="sidebar-user-email">{user.email}</p>
                    </div>
                </div>

                <div className="sidebar-progress">
                    <div className="progress-header">
                        <span className="progress-label">Progress</span>
                        <span className="progress-count">
                            {currentQindex + 1}/{questions.length}
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentQindex + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <Logout />
                </div>
            </aside>

            {/* Main Content */}
            <main className="rocket-main">
                {/* Header */}
                <header className="rocket-header">
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="header-content">
                        <h1 className="header-title">
                            Hello, <span className="header-name">{firstName}</span>! 👋
                        </h1>
                        <p className="header-subtitle">Let's build your perfect resume together</p>
                    </div>
                    <Link to="/" className="mobile-logo">
                        <RocketIcon />
                    </Link>
                </header>

                {/* Chat Container */}
                <div className="chat-container">
                    <div className="chat-messages">
                        {/* AI Message */}
                        <div className="message-wrapper ai-message">
                            <div className="message-avatar">
                                <Avatar className="avatar-ai">
                                    <AvatarImage src={logo} loading="lazy" />
                                    <AvatarFallback>
                                        <FontAwesomeIcon icon={faRocket} />
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="message-content">
                                <div className="message-header">
                                    <span className="message-sender">ResumeRocket AI</span>
                                    <span className="message-badge">
                                        Question {currentQindex + 1}
                                    </span>
                                </div>
                                <div className="message-bubble ai-bubble">
                                    {errorMessage ? (
                                        <p className="error-text">{errorMessage}</p>
                                    ) : (
                                        <ReactTyped
                                            strings={[questions[currentQindex]]}
                                            typeSpeed={20}
                                            showCursor={false}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* User Answers Display */}
                        {answer.map((ans, index) => (
                            <div key={index} className="message-wrapper user-message">
                                <div className="message-content">
                                    <div className="message-header">
                                        <span className="message-sender">You</span>
                                    </div>
                                    <div className="message-bubble user-bubble">{ans}</div>
                                </div>
                                <div className="message-avatar">
                                    <Avatar className="avatar-user">
                                        <AvatarFallback>
                                            <span>{user.initials}</span>
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="chat-input-container">
                        {!readyButton ? (
                            <div className="input-wrapper">
                                <textarea
                                    id="answer"
                                    className="chat-input"
                                    placeholder="Type your answer here..."
                                    rows="1"
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    className="send-button"
                                    onClick={handleAnswer}
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        ) : (
                            <div className="generate-section">
                                {isLoading ? (
                                    <div className="loading-state">
                                        <div className="spinner"></div>
                                        <p>Generating your professional CV...</p>
                                    </div>
                                ) : (
                                    <PdfGenerator
                                        userPrompt={joinedA}
                                        setIsLoading={setIsLoading}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
            )}
        </div>
    )
}
