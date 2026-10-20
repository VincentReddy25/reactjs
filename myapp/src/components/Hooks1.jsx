import { useState } from "react"

export default function Hooks1() {
    const [count, setCount] = useState(0)
    const [isShow, setIsShow] = useState(true)
    const [content, setContent] = useState("text will display here")

    const decCount = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }
    return (
        <>
            <div className="border-2 p-4 m-4 grid gap-4">
                <header className="text-blue-600">useState</header>

                <div className="border p-2">
                    <h4>Counter</h4>
                    <button onClick={decCount} className="border px-2 py-1">-</button>
                    <span className="text-2xl p-4">{count}</span>
                    <button onClick={() => setCount(prev => prev + 1)} className="border px-2 py-1">+</button>
                </div>

                <div className="border p-2 flex">
                    <button onClick={() => setIsShow(!isShow)} className="border px-4 cursor-pointer">{isShow ? "Hide" : "Show"}</button>
                    {isShow && <h4 className="px-4">Toggle button</h4>}
                </div>

                <div className="border p-2">
                    <input type="text" placeholder="Enter here..." onChange={e => setContent(e.target.value)} className="border px-2" />
                    <p>{content}</p>
                </div>
            </div>

        </>
    )
}