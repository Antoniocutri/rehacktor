import { Link } from "react-router-dom"

export default function Sidebar({genres}) {
   
    return(
        <>
            <div className="h-screen text-white ">
                <div className="flex justify-between px-3 py-4 border-b border-gray-700">
                    <h3 className="text-2xl font-bold">Filtra per Categoria</h3>
                </div>

                <ul className="mt-4 px-3 flex flex-col gap-2">
                    {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link
                        to={`/genre/${genre.slug}`}
                        className="block px-3 py-2 rounded-md hover:bg-indigo-600"
                        >
                        {genre.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
    
}