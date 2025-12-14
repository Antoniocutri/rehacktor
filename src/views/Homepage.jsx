import { useLoaderData } from "react-router"
import GameList from "../components/HomeComponents/GameList"

export default function Homepage() {

    const games = useLoaderData()
    console.log(games)

    return (
    <>
        <h1 className="font-electro text-4xl text-center font-bold my-8 tracking-widest text-white">
        Reactor
        </h1>

        <GameList>
        {games.map((game) => (
            <GameList.Card key={game.id} game={game} />
        ))}
        </GameList>
    </>
    );
}