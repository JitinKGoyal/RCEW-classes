import React, { useState } from 'react'

function ForState() {

    // useState is a hook
    const [a, setA] = useState(45);
    const [c, setC] = useState(0)

    let b = 34;

    console.log("a", a)
    console.log("b", b)

    function decrease() {
        b = b - 1;
        setA(a - 5);
    }

    function increase() {
        setA(a + 5);
    }

    function decreaseC() {
        setC(c - 5);
    }

    function increaseC() {
        setC(c + 5);
    }

    return (
        <>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <p>a: {a} </p>
            <p>b: {b} </p>
            <hr />
            <button onClick={decreaseC}>-</button>
            <button onClick={increaseC}>+</button>
            <p>c: {c} </p>
        </>
    )
}

export default ForState