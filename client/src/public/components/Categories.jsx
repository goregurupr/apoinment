import React from 'react'
import { Link } from "react-router-dom"
const Categories = () => {

    const squareCard = [
        {
            icon: " bi bi-person-lines-fill",
            title: "Doctors",
            desc: "Due to its wide spread use as filler text",
            to: "/"
        },
        {
            icon: " bi bi-capsule",
            title: "Clinics",
            desc: "Due to its wide spread use as filler text",
            to: "/"
        },
        {
            icon: " bi bi-binoculars",
            title: "Labs",
            desc: "Due to its wide spread use as filler text",
            to: "/"
        },
        {
            icon: " bi bi-truck",
            title: "Emergency",
            desc: "Due to its wide spread use as filler text",
            to: "/"
        },
        {
            icon: " bi bi-shield-check",
            title: "Insurance",
            desc: "Due to its wide spread use as filler text",
            to: "/"
        },
    ]

    const cardSquare = <>
        {
            squareCard.map(item => <div class="card mt-5 shadow">
                <div class="card-body">
                    <div className={`bg-light roundicon ${item.icon}`}></div>
                    <p className='fs-4 fw-bold text-secondary'>{item.title}</p>
                    <p>{item.desc}</p>
                    <Link className='nav-link' to={item.to}>Find Here <i class="bi bi-arrow-right-short text-primary"></i>
                    </Link>
                </div>
            </div>)
        }

    </>
    return <>
        <div className="text-center mt-5  " >
            <p className='fw-bold fs-2'>Explore By Categories</p>
            <p className=''>Great doctor if you need your family member to get effective
                immediate assistance,
                <br />
                emergency treatment or a simple consultation.</p>
        </div>

        <div className='container d-flex gap-4 mt-5 '>

            {cardSquare}

        </div>



        <div className='container mt-5'>
            <div className="row">
                <div className="col-sm-6">

                    <div className='text-primary text-center fw-bold  rounded-5 bg-warning w-25'>
                        <p>About Doctries</p>
                    </div>

                    <p className='fs-2 fw-bold'>
                        Good Services And Better
                        <br />
                        Health By Our Specialists
                    </p>

                    <p className='fs-5'>Great doctor if you need your family member to get effective immediate assistance,
                        emergency treatment or a simple </p>
                    <p className='fs-5'>
                        The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.
                    </p>
                    <button type="button" class="btn btn-primary">Read More</button>
                </div>

                <div className="col-sm-5 offset-1">
                    <img className='h-100 img-fluid ' src="https://shreethemes.in/doctris/layouts/assets/images/about/about-2.png" alt="" srcset="" />
                </div>
            </div>
        </div>


    </>
}

export default Categories