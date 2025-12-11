import { Link } from "react-router-dom"

export default function Sidebar({genres}) {

    return(
        <>
            <nav className="h-screen bg-nav-grey">
                <ul className="px-5">
                    {genres.map((genre)=>{
                        return(
                            <li className="mb-2" key={genre.id}>
                                <Link>{genre.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
    
}