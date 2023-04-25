
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/public/publicActions'
import { useNavigate } from 'react-router-dom'
import { invalidate } from '../../redux/public/publicSlice'

const Register = () => {
    const { register, error, loading, info } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "ross",
        email: "ross@gmail.com",
        password: "123",
        gender: "male",
    })
    const handleRegister = () => dispatch(registerUser(userData))

    useEffect(() => {
        if (register) {
            navigate("/login")
        }
    }, [register])
    useEffect(() => {
        let timer
        if (error) {
            console.log("CALLED")
            timer = setTimeout(() => {
                dispatch(invalidate("error"))
            }, 3000)
        }
        return () => clearTimeout(timer)  // cleanup
    }, [error])


    if (loading) return <div class="spinner-border text-primary"></div>

    return <div className="container mt-5">
        <div className="row">
            <div className=' mt-5 text-center'>
                <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png" alt="" srcset="" />
            </div>
            <div className="col-sm-5 offset-4 ">

                {error && <div className="alert alert-danger">{error}</div>}

                <div class="card shadow mt-4">

                    <div class="card-body">
                        <p className='text-center fw-bold fs-4'>Sing up</p>
                        <div className='d-flex gap-4'>

                            <div>
                                <label htmlFor="">First Name<span className='text-danger'>*</span></label>
                                <input type="text" className='form-control mt-2' placeholder='First' />

                            </div>
                            <div>
                                <label htmlFor="">Last Name <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control mt-2' placeholder='Last' />

                            </div>
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="" className='fw-bold'>Your Email <span className='text-danger'>*</span></label>
                            <input type="text" className='form-control mt-2' placeholder='Email' />

                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='fw-bold'>Your Password <span className='text-danger'>*</span></label>
                            <input type="password" className='form-control  mt-2' placeholder='Email' />

                        </div>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>

                                <input type='checkbox' className='form-check-input' value="" id='' />

                                <label htmlFor="" className='ms-2 fw-bold'>I Accept Terms And Condition </label>
                            </div>
                        </div>

                        <button onClick={handleRegister} type="button" class="btn btn-primary w-100 mt-3">Register</button>
                        <p className='text-center mt-3'>OR</p>
                        <button type="button" class="btn btn-outline-primary w-100">Continue with Google</button>



                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Register