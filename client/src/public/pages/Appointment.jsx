import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookAppoinment, getDoctorsAction } from '../../redux/public/publicActions'

const Appointment = () => {
    const [appointmentData, setAppointmentData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setAppointmentData({ ...appointmentData, [name]: value })
    }

    const { info, doctors } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const doctorList = doctors && doctors.map(item => <option value={item._id}>
        {item.name}
    </option>)
    const cat = doctors && doctors.map(item => item.category)
    const depList = [...new Set(cat)].map(item => <option value={item}>{item}</option>)
    useEffect(() => { dispatch(getDoctorsAction()) }, [])


    const handleBooking = () => dispatch(bookAppoinment(appointmentData))

    return <div className="container mt-2">
        {JSON.stringify(appointmentData)}
        <div className="row">
            <div className="col-sm-6 offset-3">
                <div class="card ">
                    <button type="button" class="btn btn-primary">Online Appointment</button>
                    <div class="card-body">
                        <div className=''>
                            <label className='fw-bold' htmlFor="">Patient Name <span className='text-danger'>*</span></label>
                            <input
                                disabled
                                value={info.name}
                                type="text"
                                className='form-control mt-2'
                                placeholder='Patient Name :' />
                        </div>

                        <div className='d-flex gap-3 mt-3'>
                            <div className='w-100'>
                                <label className='fw-bold' htmlFor="">Select Date</label>
                                <input
                                    name='date'
                                    onChange={handleChange}
                                    type="date" className='form-control' />
                            </div>
                            <div className='w-100'>
                                <label className='fw-bold' htmlFor="">Select Time</label>
                                <input
                                    name='time'
                                    onChange={handleChange}
                                    type="time" className='form-control' />
                            </div>
                        </div>

                        <div className="d-flex   gap-3">
                            <div className='mt-3 w-100'>
                                <label className='fw-bold' htmlFor="">Departments</label>
                                <select class="form-select mt-2">
                                    {depList}
                                </select>
                            </div>
                            <div className='mt-3 w-100'>
                                <label className='fw-bold' htmlFor="">Doctor</label>
                                <select
                                    name="doctorId"
                                    onChange={handleChange} class="form-select mt-2">
                                    {doctorList}
                                </select>
                            </div>
                        </div>

                        <div className='d-flex gap-3 mt-3  '>
                            <div className='w-100'>
                                <label className='fw-bold' htmlFor="">Your Email <span className='text-danger'>*</span></label>
                                <input
                                    disabled
                                    value={info.email}
                                    type="text"
                                    className='form-control mt-2'
                                    placeholder='Your Email' />

                            </div>
                            <div className='w-100'>
                                <label className='fw-bold' htmlFor="">Your Phone <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    name='mobile'
                                    onChange={handleChange}
                                    disabled={info.mobile}
                                    value={info.mobile}
                                    className='form-control mt-2'
                                    placeholder='Your phone' />

                            </div>
                        </div>
                        <label htmlFor="" className='mt-3 fw-bold'>Comments <span className='text-danger'>*</span></label>
                        <textarea
                            name='comment'
                            onChange={handleChange}
                            className='w-100 rounded-2 mt-2'
                            placeholder='Your Message:' rows="4"></textarea>
                        <button
                            onClick={handleBooking}
                            type="button"
                            class="btn btn-primary w-100 mt-2">Book An Appointment</button>

                    </div>

                </div>
            </div>
        </div>

    </div>
}

export default Appointment