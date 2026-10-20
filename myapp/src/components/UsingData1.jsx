import { DataContext } from "./GlobalData"
import { useContext } from "react"

export default function UsingData1() {
    const pokemons = useContext(DataContext)
    return (
        <>
            <p>UsingData1.jsx - Data :</p>

            <div>
                <ul>
                    {pokemons.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

