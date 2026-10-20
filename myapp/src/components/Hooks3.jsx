import { useState, useRef } from "react";

export default function Hooks3() {

    const [num, setNum] = useState(0)
    const count = useRef(0)

    console.log(" - - - Rendering Component - - - ")

    const increase = () => {
        count.current += 1
        console.log("count:", count.current)
    };

    const inc = () => {
        setNum(num + 1)
    }

    return (
        <div className="border m-4 p-4">
            <h2>with useRef Count: {count.current}</h2>
            <button onClick={increase} className="border px-4">Increase useRef</button>

            <h1>num: {num}</h1>
            <button onClick={inc} className="border px-4">Increase Num</button>
        </div>
    );
}
