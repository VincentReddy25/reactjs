
# Syllabus
    - Installing Node
    - Creating React App (cra, vite)
    - Folder Structure
    - Fragments - <> </>
    - Components
        - Functional Components
    - Props
        - Passing
        - Default Props
    - List and keys
    - React Router DOM
    - Hooks
        - useState
        - useEffect
        - useRef
        - useContext/ContextAPI



# Creating a React App
    (old)
    > npx create-react-app <app-name>
    > npm start

    (latest)
    > npm create vite@latest
    > npm run dev
    Setup:
    > cd 
    > npm i
    > npm run dev


# Task 1:

    Create a React App
    > npx create-react-app <app-name>

    Create 4 Components in src/components
    - Home.js
    - About.js
    - Contact.js
    - Login.js

    Render this in src/App.js


# Installing tailwindcss-v4 in react 

    > npm install tailwindcss @tailwindcss/vite

    - vite.config.js

        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import tailwindcss from '@tailwindcss/vite'

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react(), tailwindcss()],
        })


    - index.css
        @import "tailwindcss";

# Installing react-router-dom
    > npm install react-router-dom

    - main.jsx

    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import { BrowserRouter } from 'react-router-dom'
    import './index.css'
    import App from './App.jsx'
    createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
    )



    - src/components/Navbar.jsx

    import { Link, Route, Routes } from "react-router-dom";

    import Home from './Home'
    import About from "./About";
    import Contact from "./Contact";
    import Login from "./Login";

    export default function Navbar() {
        return (
            <>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">About</Link>
                <Link to="/login">About</Link>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </>
        )
    }