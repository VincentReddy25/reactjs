import { useEffect, useState } from "react"

export default function Hooks2() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
                const data = await res.json()
                setData(data.results)
                console.log(data.results);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>useEffect</h1>

            <div className="m-4 grid gap-4">
                <ul>
                    {data.map((pokemon) => (
                        <li key={pokemon.name}>
                            <a target="_blank" rel="noopener noreferrer" href={pokemon.url}>open url of {pokemon.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}