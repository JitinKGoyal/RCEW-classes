import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'

function TextM() {

    const [text, setText] = useState("");

    // function textHandler(e) {

    //     setText(e.target.value);
    // }

    // (e) => { setText(e.target.value); }

    function forUppercase() {
        setText(text.toUpperCase());
    }
    function forLowercase() {
        setText(text.toLowerCase());
    }

    function forCopy() {
        navigator.clipboard.writeText(text);
    }

    function forclear() {
        setText("");
    }
    function forcut() {
        navigator.clipboard.writeText(text);
        setText("");

    }

    function test() {
        console.log(text.split(" ").filter((e) => e != ""))
    }

    return (
        <>

            <textarea rows='10' cols='100' className='mx-auto d-block mt-3' value={text} onChange={e => setText(e.target.value)} />

            <div className='d-flex justify-content-center'>
                <button className='btn btn-info m-2' onClick={forUppercase}>UPPERCASE</button>
                <button className='btn btn-info m-2' onClick={forLowercase}>LowerCASE</button>
                <button className='btn btn-info m-2' onClick={forCopy}>copy</button>
                <button className='btn btn-info m-2' onClick={forclear}>clear</button>
                <button className='btn btn-info m-2' onClick={forcut}>cut</button>
                <button className='btn btn-info m-2' onClick={test}>test</button>
            </div>

            <div className='text-center'>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

            <div className='text-center'>
                <h2>Summary</h2>
                <p>Characters: {text.length}</p>
                <p>Word: {text.split(" ").filter((e) => e != "").length}</p>
            </div>

        </>
    )
}

export default TextM