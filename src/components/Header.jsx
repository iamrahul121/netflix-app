import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {
    let navigate = useNavigate()
    const OnHomeSignIn = () => {
        navigate('/login')
    }
    return (
        <section className='bg'>
            <NavBar/>
            <div className="header">
                <div className="header_home">
                    <div className="header_data">
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h3>Watch anywhere. Cancel anytime</h3>
                        <h4>Ready to watch? Enter your email to create or restart your membership</h4>
                    </div>
                    <div className="header_form">
                        <input type="text" placeholder='Email address' />
                        <button class="btn btn-danger fw-semibold header_btn" type="submit" onClick={OnHomeSignIn}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header