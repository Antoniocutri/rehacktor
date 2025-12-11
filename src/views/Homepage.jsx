import { useLoaderData } from "react-router"
import GameList from "../components/HomeComponents/GameList"

export default function Homepage() {

    const games = useLoaderData()
    console.log(games)

    return(
        <>
            <h1 className="font-electro text-3x1 text-center font-bold">Reactor</h1>

            <GameList>
                {games.map((game)=>{
                    return(
                        <GameList.Card key={game.id} game={game}/>
                    )
                })}
            </GameList>
        </>
    )
}