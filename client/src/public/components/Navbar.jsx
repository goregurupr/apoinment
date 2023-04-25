import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/public/publicSlice'

const Navbar = () => {
    const { info } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const navLinks = [
        { label: "home", icon: "house", to: "/" },
        { label: "doctors", icon: "heart-pulse", to: "/doctors" },
        { label: "patinets", icon: "person", to: "/patinets" },
        { label: "pharmacy", icon: "capsule", to: "/pharmacy" },
        { label: "features", icon: "magic", to: "/features" },

    ]
    const linkList = navLinks.map(item => <Link
        className='nav-link'
        key={item.label}
        to={item.to}>
        <span className={` bi bi-${item.icon}`}></span> {item.label}
    </Link>)

    const lgoinOnlyContent = <>
        {info && <>
            <div class="dropdown">
                {
                    info.avatar
                        ? <img
                            data-bs-toggle="dropdown"
                            className='img-fluid rounded-circle'
                            width={50}
                            src={info.avatar} alt={info.name} />
                        : <div
                            data-bs-toggle="dropdown"
                            className='bg-primary p-4 rounded-circle text-light d-flex justify-content-center align-items-center fs-3 fw-bold'
                            style={{ height: 50, width: 50 }}>
                            {info.name[0].toUpperCase()}
                        </div>
                }
                {/* <span className='fw-bold'>{info.name}</span> */}
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <button
                            class="dropdown-item" onClick={e => dispatch(logout())}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>

        </>}
    </>



    return <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <Link class="navbar-brand" to="/">
                <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png" alt="" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {linkList}
                </div>
                <div className='ms-auto d-flex align-items-center'>
                    {lgoinOnlyContent}
                    <Link to="/appointment" class="ms-3 btn btn-primary">Make Appointment</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar