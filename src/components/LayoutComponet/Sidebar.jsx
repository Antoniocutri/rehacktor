import { Link } from "react-router-dom"

export default function Sidebar({genres, isOpen}) {
    console.log(isOpen)
    return(
        <>
            {isOpen &&(
                <div className={"h-screen bg-nav-grey"}>
                
                    <ul className="px-5">
                        {genres.map((genre)=>{
                            return(
                                <li className="mb-2" key={genre.id}>
                                    <Link to={`/genre/${genre.slug}`}>{genre.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </>
    )
    
}