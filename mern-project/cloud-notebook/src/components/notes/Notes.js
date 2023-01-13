import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Note from '../Note'

import "./notes.css"

function Notes() {
    const navigate = useNavigate();
    const [loggedin, setLoggedin] = useState(false)

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("clouNotebookCreds"));
        if (data?._id) {
            console.log("first")
            setLoggedin(true)
        } else {
            console.log("second")
            navigate("/login")
            document.getElementById("login-btn").click()
        }

    }, [])


    return (
        <>

            <div className='note-prt pt-3'>
                <button type="button" class="btn add_btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">+</button>

                <div className=' d-flex justify-content-around align-items-start flex-wrap'>
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    {/* <label for="recipient-name" class="col-form-label">Recipient:</label> */}
                                    <input type="text" class="form-control" id="recipient-name" placeholder='Title' />
                                </div>
                                <div class="form-group my-3">
                                    <input type="text" class="form-control" id="recipient-name" placeholder='Tag' />
                                </div>
                                <div class="form-group">
                                    {/* <label for="message-text" class="col-form-label">Message:</label> */}
                                    <textarea class="form-control" id="message-text" placeholder='Your note' rows="7"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Notes