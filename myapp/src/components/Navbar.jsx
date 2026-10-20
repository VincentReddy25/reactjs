import { Link, Route, Routes } from "react-router-dom";

import Hooks1 from './Hooks1';
import Hooks2 from "./Hooks2";
import Hooks3 from "./Hooks3";
import Props from './Props';
import UsingData1 from "./UsingData1";
import UsingData2 from "./UsingData2";

export default function Navbar() {
    return (
        <>
            <div className="flex gap-4">
                <Link to="/props" className="underline text-blue-500">Props</Link>
                <Link to="/hooks1" className="underline text-blue-500">useState</Link>
                <Link to="/hooks2" className="underline text-blue-500">useEffect</Link>
                <Link to="/hooks3" className="underline text-blue-500">useRef</Link>
                <Link to="/hooks4" className="underline text-blue-500">useContext1</Link>
                <Link to="/hooks5" className="underline text-blue-500">useContext2</Link>
            </div>

            <Routes>
                <Route path="/props" element={<Props />} />
                <Route path="/hooks1" element={<Hooks1 />} />
                <Route path="/hooks2" element={<Hooks2 />} />
                <Route path="/hooks3" element={<Hooks3 />} />
                <Route path="/hooks4" element={<UsingData1 />} />
                <Route path="/hooks5" element={<UsingData2 />} />
            </Routes>
        </>
    )
}

