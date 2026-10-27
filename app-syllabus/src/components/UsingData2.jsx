import { DataContext } from "./GlobalData"
import { useContext } from "react"

export default function UsingData2() {
    const pokemons = useContext(DataContext)

    return (
        <>
            <p>UsingData2.jsx - Data :</p>

            <div>
                <ul>
                    {pokemons.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.url}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}