import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
import "./login.css"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        const response = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await response.json()

        if (data.email) {
            localStorage.setItem("clouNotebookCreds", JSON.stringify(data))
            navigate("/")
            document.getElementById("notes-btn").click()
        } else {
            setErrors(data.errors)
            console.log(data.errors)
        }
    }

    return (
        <>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                The best place <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>to preserve your THOUGHTS</span>
                            </h1>
                            <div className="d-flex flex-column align-items-end w-75">

                                <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                    "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE."
                                </p>
                                <p className=' mb-4 opacity-70 ' style={{ color: "hsl(218, 81%, 85%)", textAlign: "right" }}>Joss Whedon</p>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>

                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control py-3" placeholder='Email address' value={email} onChange={e => setEmail(e.target.value)} />
                                            {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control py-3" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                                            {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
                                        </div>


                                        {/* <!-- Submit button --> */}
                                        <button type="submit" onClick={handleSignup} className="btn btn-primary btn-block mb-4 w-100">
                                            Login
                                        </button>

                                    </form>
                                    {errors.map(e => (
                                        <p className='text-center text-danger m-0'>
                                            <img src="https://img.icons8.com/color/48/null/break--v4.png" height="30px" className='mx-2' />{e.msg}
                                        </p>
                                    ))}
                                    <div onClick={() => document.getElementById("signup-btn").click()}>
                                        <Link to='/signup'>Create an account?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </>
    )
}

export default Login