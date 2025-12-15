import { useLoaderData, useParams } from "react-router-dom";
import GameList from "../components/HomeComponents/GameList";

export default function GenrePage() {
    const games = useLoaderData();
    const {slug} = useParams();

    return(
        <>
            <h1 className="font-electro text-4xl text-center font-bold mb-6 md:my-8 tracking-widest text-white">
                Filtered by genre: <span className="text-accent">
                     {slug}
                </span>
            </h1>

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