import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { UserContext } from "../../context/UserContext";
import { FaArrowRightToBracket, FaBars } from "react-icons/fa6";
import supabase from "../../database/supabase";

export default function Navbar({ onOpenSidebar }) {
    const [slug, setSlug] = useState();
    const [avatarUrl, setAvatarUrl]= useState()
    const {user, signOut, profile} = useContext(UserContext)

    const download_avatar = async () => {
        if (profile){
            const { data, error } = await supabase.storage
                .from("avatars")
                .download(profile.avatar_url);
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        }
    }

    useEffect(()=>{
        download_avatar()
    }, [profile])

    const handleChange = (e) =>{
        setSlug(e.target.value)
    }

    const navigate = useNavigate()

    const handleLogout = async ()=>{
        navigate('/')
        signOut()
    }

    return(
        <>
            <nav className="navbar shadow-sm p-4 w-full">

                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl text-white hover:text-black!" to={routes.home}>Reactor</Link>
                </div>
                <div className="flex gap-2">

                    <input type="text" placeholder="Search" onChange={handleChange} className="input w-24 md:w-auto" />
                    <Link className="btn btn-square me-6" to={`/search/${slug}`}><FaSearch/></Link>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar me-4">
                            <div className="w-10 rounded-full">
                                {(user && ( 
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={avatarUrl ?? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                ))|| <FaArrowRightToBracket className="text-3xl text-white hover:text-black! mt-1 ms-0.5"/>}
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
                            {(!user &&( 
                                <>
                                    <li>
                                        <Link className="justify-between" to={routes.register}>Registrati</Link>
                                    </li>
                                    <li>
                                        <Link className="justify-between" to={routes.login}>Login</Link>
                                    </li>
                                </>
                            )) ||
                            <>
                                <li>
                                    <Link className="justify-between" to={routes.profile}>Profile</Link> 
                                </li>

                                <li>
                                    <Link className="justify-between" to={routes.profile_settings}>Settings</Link>
                                </li>

                                <li className="justify-between" onClick={handleLogout}>
                                    <p>Logout</p>
                                </li>
                            </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}