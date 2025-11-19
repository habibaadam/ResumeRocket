import React from 'react'
import '../allStyles/index.css'
import Columlayout from './Columlayout'
import AnimatedRocket from './AnimatedRocket'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import AOS from 'aos'

AOS.init()

export default function Landing() {
    return (
        <div className="landing-container">
            {/* Hero Section */}
            <div className="hero-section">
                <nav className="navbar">
                    <div className="nav-brand">
                        <h1 className="logo-text">ResumeRocket</h1>
                    </div>
                    <div className="nav-links">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        <Link to="/signup" className="nav-btn">
                            Get Started
                        </Link>
                    </div>
                </nav>

                <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="hero-title">
                        Launch Your Career with
                        <span className="gradient-text"> AI-Powered Resumes</span>
                    </h1>
                    <p className="hero-subtitle">
                        Create professional, ATS-optimized resumes in minutes. Let our AI guide you
                        through crafting the perfect resume that gets you noticed.
                    </p>
                    <div className="hero-cta">
                        <Link to="/register" className="cta-primary">
                            Create Your Resume
                        </Link>
                        <Link to="/login" className="cta-secondary">
                            Learn More
                        </Link>
                    </div>
                </div>

                <div className="hero-visual" data-aos="fade-up" data-aos-delay="200">
                    <AnimatedRocket />
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">Four simple steps to your perfect resume</p>
                </div>
                <Columlayout />
            </div>

            {/* CTA Section */}
            <div className="cta-section" data-aos="fade-up">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Launch Your Career?</h2>
                    <p className="cta-text">
                        Join thousands of professionals who've landed their dream jobs with
                        ResumeRocket
                    </p>
                    <Link to="/signup" className="cta-button">
                        Start Building Now
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}
