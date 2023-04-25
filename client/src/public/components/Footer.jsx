import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const compayLinkArray = [
        { title: "About Us", to: "/" },
        { title: "Services", to: "/" },
        { title: "Teams", to: "/" },
        { title: "Projects", to: "/" },
        { title: "Blogs", to: "/" },
        { title: "Login", to: "/login" },
    ]
    const compayLinkContent = compayLinkArray.map(item => <Link
        to={item.to}
        key={item.title}
        className='nav-link mb-3'>
        <span>&gt;</span> <span className='ms-2'>{item.title}</span>
    </Link>)
    const departmnetLinkArray = [
        { title: "Eye Care", to: "/" },
        { title: "Psychotherapy", to: "/" },
        { title: "Dental Care", to: "/" },
        { title: "Orthopedic", to: "/" },
        { title: "Cardiology", to: "/" },
        { title: "Gynecology", to: "/" },
        { title: "Neurology", to: "/" },
    ]

    const departmnetLinkContent = departmnetLinkArray.map(item => <Link
        to={item.to}
        key={item.title}
        className='nav-link mb-3'>
        <span>&gt;</span> <span className='ms-2'>{item.title}</span>
    </Link>)

    const contactContent = <>
        <p><Link className='nav-link' to="/"><span className='me-2 bi bi-envelope'></span> contact@example.com</Link></p>
        <p><Link className='nav-link' to="/"><span className='me-2 bi bi-phone'></span> +9123232323</Link></p>
        <p><Link className='nav-link' to="/"><span className='me-2 bi bi-pin'></span> View on Google Map</Link></p>
    </>

    return <div className='text-secondary py-5' style={{ backgroundColor: "#202942" }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-light.png" alt="" />
                    <p className='my-4'>
                        Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
                    </p>
                </div>
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-4">
                            <p className='fs-4 fw-bold text-light'>Company</p>
                            {compayLinkContent}
                        </div>
                        <div className="col-sm-4">
                            <p className='fs-4 fw-bold text-light'>Deparments</p>
                            {departmnetLinkContent}
                        </div>
                        <div className="col-sm-4">
                            <p className='fs-4 fw-bold text-light'>Contact Us</p>
                            {contactContent}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mt-5 d-flex justify-content-between'>
                <p>2023 © SKILLHUB. Design with <span className='bi bi-heart-fill text-danger mx-2'></span>   by SKILLHUB.</p>
                <div className='d-flex gap-3'>
                    <Link to="/" className='nav-link'>Terms </Link>
                    <Link to="/" className='nav-link'>Privacy</Link>
                    <Link to="/" className='nav-link'>About </Link>
                    <Link to="/" className='nav-link'>Contact</Link>
                </div>
            </div>
        </div>

    </div>
}

export default Footer