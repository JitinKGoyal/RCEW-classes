import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
import Note from '../Note'

import "./notes.css"

function Notes() {
    const userId = JSON.parse(localStorage.getItem("clouNotebookCreds"))._id

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tag, setTag] = useState("")
    const [notes, setNotes] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("clouNotebookCreds"));
        if (data?._id) {
            getNotes();
        } else {
            navigate("/login")
            document.getElementById("login-btn").click()
        }

    }, [])

    async function addNote() {
        const response = await fetch(`${baseUrl}/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                title: title,
                description: description,
                tag: tag
            })
        })
        const data = await response.json()
        getNotes();
    }

    async function getNotes() {
        const response = await fetch(`${baseUrl}/notes/${userId}`)
        const notes = await response.json();
        setNotes(notes)
    }

    return (
        <>

            <div className='note-prt pt-3'>
                <button type="button" class="btn add_btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">+</button>

                <div className='d-flex justify-content-around align-items-start flex-wrap'>
                    {notes.map(e => (
                        <Note note={e} getNotes={getNotes} />
                    ))}

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
                                    <input type="text" class="form-control" id="recipient-name" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div class="form-group my-3">
                                    <input type="text" class="form-control" id="recipient-name" placeholder='Tag' value={tag} onChange={e => setTag(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    {/* <label for="message-text" class="col-form-label">Message:</label> */}
                                    <textarea class="form-control" id="message-text" placeholder='Your note' rows="7" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={addNote}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Notes