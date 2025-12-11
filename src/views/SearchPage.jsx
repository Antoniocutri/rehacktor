import { useLoaderData, useParams } from "react-router";
import GameList from "../components/HomeComponents/GameList";

export default function SearcPage() {
    const games = useLoaderData();
    const {slug} = useParams();

    return(
        <>
            <h1>Search by slug: {slug}</h1>

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