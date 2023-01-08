import React from 'react'
import Note from '../Note'

import "./notes.css"

function Notes() {
    return (
        <>

            <div className='note-prt pt-3'>
                <button className='add_btn btn'>+</button>

                <div className=' d-flex justify-content-around align-items-start flex-wrap'>
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>
            
           
        </>
    )
}

export default Notes