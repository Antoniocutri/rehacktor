import { Link, useNavigate } from "react-router-dom"

export default function Sidebar({genres}) {

    const navigate = useNavigate()
   
    return(
        <>
            <div className="text-white ">

                {/* MOBILE */}
                <div className="block md:hidden px-3 py-4">
                    <label className="block text-sm font-semibold mb-2">
                        Filtra per categoria
                    </label>

                    <select
                        className="select w-full bg-gray-900 rounded-md px-3 py-2"
                        defaultValue=""
                        onChange={(e) => navigate(`/genre/${e.target.value}`)}
                    >
                        <option value="" disabled>
                            Seleziona un genere
                        </option>

                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.slug}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* DESKTOP */}
                <div className="hidden md:block h-screen">
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
            </div>
        </>
    )
    
}