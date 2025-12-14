import GameCard from "./GameCard";

export default function GameList({children}) {
    return(
        <>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 pb-10">
                {children}
            </main>
        </>
    )    
}

GameList.Card = GameCard;