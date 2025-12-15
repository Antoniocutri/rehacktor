import { useLoaderData, useParams } from "react-router";
import GameList from "../components/HomeComponents/GameList";

export default function SearcPage() {
    const games = useLoaderData();
    const {slug} = useParams();

    return(
        <>
            <h1 className="font-electro text-4xl text-center font-bold mb-6 md:my-8 tracking-widest text-white">
                Ricerca per nome: <span className="text-accent">
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