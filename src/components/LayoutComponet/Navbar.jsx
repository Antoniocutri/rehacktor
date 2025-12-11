import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../router/routes";

export default function Navbar() {
    const [slug, setSlug] = useState();

    const handleChange = (e) =>{
        setSlug(e.target.value)
    }

    return(
        <>
            <div className="navbar bg-gray-400 shadow-sm">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to={routes.home}>Reactor</Link>
                </div>
                <div className="flex gap-2">
                    

                    <input type="text" placeholder="Search" onChange={handleChange} className="input input-bordered w-24 md:w-auto" />
                    <Link className="btn btn-square" to={`/search/${slug}`}><FaSearch/></Link>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}