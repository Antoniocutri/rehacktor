import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import avatar from "../../assets/avatar.jpg"
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import supabase from "../../database/supabase";

export default function ProfilePage() {
    const {user, profile} = useContext(UserContext)
    const [avatarUrl, setAvatarUrl]= useState()
    const [userFavourites, setUserFavourites] = useState()

    const download_avatar = async () => {
        if (profile){
            const { data, error } = await supabase.storage
                .from("avatars")
                .download(profile.avatar_url);
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        }
    }

    const get_favourite = async () =>{
        if (profile) {
            let { data: favourites, error } = await supabase
                .from("favourites")
                .select("*")
                .eq("profile_id", profile.id);
            setUserFavourites(favourites);
        }
    }

    useEffect(
        ()=>{
            download_avatar();
            get_favourite();
        },[profile]
    )

    return(
            <main className="min-h-screen px-6 py-10 text-white">

                {user && profile && (
                    <>
                    <article className="flex flex-col items-center mb-10">
                        <img
                        src={avatarUrl ?? avatar}
                        alt="Profile Image"
                        className="w-28 h-28 rounded-full border-4 border-indigo-600 shadow-lg"
                        />
                        <h2 className="text-3xl font-bold mt-4">{profile.first_name} {profile.last_name}</h2>
                        <p className="text-gray-400 mt-1">@{profile.username}</p>
                    </article>


                    <section className="max-w-4xl mx-auto mb-10">
                        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">I miei Dati:</h3>
                            <p><strong className="font-semibold">Nome:</strong> {profile.first_name} {profile.last_name}</p>
                            <p><strong className="font-semibold">Username:</strong> {profile.username}</p>
                            <p><strong className="font-semibold">Email:</strong> {user.email}</p>

                            <Link
                                to={routes.profile_settings}
                                className="inline-block mt-4 px-6 py-2 border border-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition"
                            >
                                Settings
                            </Link>
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto ">
                        <div className="block">
                            <h2 className="text-2xl font-bold mb-4">I miei giochi preferiti</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {userFavourites &&
                            userFavourites.map((game) => (
                                <Link key={game.id} to={`/detail/${game.game_id}`}>
                                    <div  className="relative rounded-xl bg-gray-900">
                                        <div className="p-4">
                                            <h2 className="text-lg font-semibold text-white">{game.game_name}</h2>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                    </>
                )}
            </main>

    )
}