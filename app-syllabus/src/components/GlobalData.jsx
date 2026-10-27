import { createContext, useState } from "react";

export const DataContext = createContext()
export default function GlobalData({ children }) {
    const [pokemons, setPokemons] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
            const data = await res.json()
            setPokemons(data.results)
        } catch (err) {
            console.log(err);
        }
    }
    fetchData()
    return (
        <>
            <DataContext.Provider value={pokemons}>
                {children}
            </DataContext.Provider>
        </>
    )
}

