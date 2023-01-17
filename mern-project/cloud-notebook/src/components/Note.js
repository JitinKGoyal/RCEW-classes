import React from 'react'
import { baseUrl } from '../config'

function Note(props) {
    const userId = JSON.parse(localStorage.getItem("clouNotebookCreds"))._id

    // destructuring
    const { _id, title, description, tag } = props.note

    async function deleteNote() {
        const response = await fetch(`${baseUrl}/notes`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                id: _id
            })
        })
        const data = await response.json()
        console.log(data)
        props.getNotes()
    }

    return (
        <>
            <section>
                <p className='text-white tag'>{tag}</p>
                <div class="heart" onClick={deleteNote}><i class="fas fa-trash"></i></div>
                <div class="card">
                    <h3>{title}</h3>
                    <p></p>
                    <p>{description}</p>
                </div>
                <button class="buy-btn">
                    Edit
                </button>
            </section>
        </>
    )
}

export default Note