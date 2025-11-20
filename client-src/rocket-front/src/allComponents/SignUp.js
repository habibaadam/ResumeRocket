import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext, useRef } from 'react'
import { Alert, AlertDescription, AlertTitle } from '../app/ui/alert'
import { useNavigate, Link } from 'react-router-dom'
import { RocketIcon } from '@radix-ui/react-icons'
import { UserContext } from '../UserContext'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import '../allStyles/forms.css'

export default function SignUp() {
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [showAlert])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const inputPassword = useRef({})
    inputPassword.current = watch('password', '')

    const handleRegister = async () => {
        const url = 'https://resumerocket.onrender.com/signup'
        const firstName = document.getElementById('form-first').value
        const lastName = document.getElementById('form-last').value
        const email = document.getElementById('form-email').value
        const password = document.getElementById('form-pass').value

        try {
            await axios
                .post(url, {
                    firstName,
                    lastName,
                    email,
                    password,
                })
                .then((response) => {
                    const user = response.data
                    localStorage.setItem('userId', user.id)
                    console.log(localStorage.getItem('userId'))
                    setUser(user)

                    console.log(response.data)

                    setShowAlert(true)
                    setTimeout(() => {
                        navigate(`/rocket/${firstName}`)
                    }, 3000)
                })
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="auth-page">
            {showAlert && (
                <Alert className="success-alert">
                    <RocketIcon className="alert-icon" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                        Account Created Successfully! Redirecting...
                    </AlertDescription>
                </Alert>
            )}

            <div className="auth-container">
                {/* Left Side - Branding */}
                <div className="auth-branding">
                    <div className="branding-content">
                        <Link to="/" className="brand-logo">
                            <RocketIcon className="logo-icon" />
                            <span>ResumeRocket</span>
                        </Link>
                        <h1 className="branding-title">Join Us Today!</h1>
                        <p className="branding-subtitle">
                            Start creating professional, AI-powered resumes that land you interviews
                        </p>
                        <div className="branding-features">
                            <div className="feature-item">
                                <div className="feature-icon">🚀</div>
                                <span>Quick & Easy Setup</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">💼</div>
                                <span>Professional Templates</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎓</div>
                                <span>Career Boost</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Signup Form */}
                <div className="auth-form-section">
                    <div className="auth-form-wrapper">
                        <div className="form-header">
                            <h2 className="form-title">Create Account</h2>
                            <p className="form-subtitle">
                                Get started with your professional resume journey
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(handleRegister)} className="auth-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                                        <input
                                            {...register('firstName', { required: true })}
                                            type="text"
                                            id="form-first"
                                            className={`form-input ${
                                                errors.firstName ? 'input-error' : ''
                                            }`}
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                    {errors.firstName && (
                                        <span className="error-message">
                                            First name is required
                                        </span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                                        <input
                                            {...register('lastName', { required: true })}
                                            type="text"
                                            id="form-last"
                                            className={`form-input ${
                                                errors.lastName ? 'input-error' : ''
                                            }`}
                                            placeholder="Enter last name"
                                        />
                                    </div>
                                    {errors.lastName && (
                                        <span className="error-message">Last name is required</span>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <div className="input-wrapper">
                                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                    <input
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        })}
                                        type="email"
                                        id="form-email"
                                        className={`form-input ${
                                            errors.email ? 'input-error' : ''
                                        }`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {errors.email && (
                                    <span className="error-message">
                                        Please enter a valid email address
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="input-wrapper">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <input
                                        {...register('password', { required: true, minLength: 8 })}
                                        type={showPassword ? 'text' : 'password'}
                                        id="form-pass"
                                        className={`form-input ${
                                            errors.password ? 'input-error' : ''
                                        }`}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Create a password"
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="error-message">
                                        Password must be at least 8 characters long
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <div className="input-wrapper">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <input
                                        {...register('rPassword', {
                                            required: true,
                                            validate: (value) => value === inputPassword.current,
                                        })}
                                        type={showPassword ? 'text' : 'password'}
                                        id="form-rpassword"
                                        className={`form-input ${
                                            errors.rPassword ? 'input-error' : ''
                                        }`}
                                        placeholder="Confirm your password"
                                    />
                                    <button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </button>
                                </div>
                                {errors.rPassword && (
                                    <span className="error-message">Passwords do not match</span>
                                )}
                            </div>

                            <button type="submit" className="submit-btn">
                                <span>Create Account</span>
                                <RocketIcon className="btn-icon" />
                            </button>

                            <div className="form-footer">
                                <p className="footer-text">
                                    Already have an account?
                                    <Link className="footer-link" to="/login">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
