import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext, useRef } from 'react'
import { Alert, AlertDescription, AlertTitle } from '../app/ui/alert'
import { useNavigate, Link } from 'react-router-dom'
import { RocketIcon } from '@radix-ui/react-icons'
import { UserContext } from '../UserContext'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import '../allStyles/forms.css'

export default function Login() {
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

    const handleLogin = async () => {
        const url = 'https://resumerocket.onrender.com/login'
        const email = document.getElementById('form-email').value
        const password = document.getElementById('form-pass').value

        try {
            await axios
                .post(url, {
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
                        navigate(`/rocket/${user.first_name}`)
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
                    <AlertDescription>Logged In Successfully! Redirecting...</AlertDescription>
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
                        <h1 className="branding-title">Welcome Back!</h1>
                        <p className="branding-subtitle">
                            Continue your journey to creating the perfect resume powered by AI
                        </p>
                        <div className="branding-features">
                            <div className="feature-item">
                                <div className="feature-icon">✨</div>
                                <span>AI-Powered Generation</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <span>Lightning Fast</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <span>ATS-Optimized</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="auth-form-section">
                    <div className="auth-form-wrapper">
                        <div className="form-header">
                            <h2 className="form-title">Sign In</h2>
                            <p className="form-subtitle">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(handleLogin)} className="auth-form">
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
                                        required
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
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
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

                            <button type="submit" className="submit-btn">
                                <span>Sign In</span>
                                <RocketIcon className="btn-icon" />
                            </button>

                            <div className="form-footer">
                                <p className="footer-text">
                                    Don't have an account?
                                    <Link className="footer-link" to="/signup">
                                        Create Account
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
