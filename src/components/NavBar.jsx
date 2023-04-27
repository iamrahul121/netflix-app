import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const SignInForm = () => {
        navigate('/login')
    }
    return (
        <nav className="navbar py-0 main_nav">
            <div className="container p-0">
                <Link className="navbar-brand p-0" to="/"><img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" width="160" alt="netflix logo text emblem" /></Link>
                <form className="d-flex my-0" role="search">
                    <select className='mx-3 select_tag'>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="btn btn-danger fw-semibold nav_btn" type="submit" onClick={SignInForm}>Login</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar