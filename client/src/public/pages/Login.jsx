import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/public/publicActions'

const Login = () => {
    const { loading, error, info } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        email: "john@gmail.com",
        password: "123"
    })
    const handleLogin = () => dispatch(loginUser(userData))
    const navigate = useNavigate()
    useEffect(() => {
        if (info) {
            navigate("/appointment")
        }
    }, [info])

    if (loading) return <div class="spinner-border text-primary"></div>
    return <div className='container'>
        <div className="row">
            <div className="col-sm-5 offset-sm-3">
                {
                    error && <div class="alert alert-danger">{error}</div>
                }
                <img src="" alt="" />
                <div className="card">
                    <div className="card-body">
                        <p>Sign In</p>
                        <div>
                            <label htmlFor="">Your Email <span className='text-danger'>*</span> </label>
                            <input type="text" className='form-control' placeholder='Email' />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Password <span className='text-danger'>*</span> </label>
                            <input type="password" className='form-control' placeholder='Password' />
                        </div>
                        <br />
                        <div className='d-flex justify-content-between'>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="id" />
                                <label class="form-check-label" for="id">
                                    Remember Password
                                </label>
                            </div>
                            <Link to="/" >Forget Password</Link>

                        </div>
                        <br />
                        <button onClick={handleLogin} type="button" class="btn btn-primary w-100">Sign In</button>
                        <p className='text-center my-2'>
                            New to SKILLHUB?
                            <strong>
                                <Link className='nav-link d-inline' to="/register">Register Here</Link>
                            </strong>
                        </p>
                        <p className='text-center my-3'>OR</p>
                        <button type="button" class="btn btn-outline-primary w-100 btn-lg">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login