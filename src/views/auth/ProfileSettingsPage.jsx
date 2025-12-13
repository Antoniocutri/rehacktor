import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import supabase from "../../database/supabase";

export default function ProfileSettingsPage(){
    const [file, setFile] = useState()
    const [preview, setPreview] = useState()
    const {profile, getUser} = useContext(UserContext)

    const handleChange = (e) => {
        setFile(()=> e.target.files[0])
    }

    useEffect(
        ()=>{
            if (file) {
                const imageUrl = URL.createObjectURL(file)
                setPreview(()=> imageUrl)
            }
        }, [file]
    )

    const handleAvatarSubmit = async (e) =>{
        e.preventDefault();
        const fileExt = file.name.split(".").pop();//'png'
        const fileName = `${profile.id}${Math.random()}.${fileExt}` ;
        await supabase.storage.from("avatars").upload(fileName, file);
        await supabase
            .from("profiles")
            .upsert({ id: profile.id, avatar_url: fileName })
            .select();
        await getUser();
    };

    const {updateProfile} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const onSubmit = (data) =>{
        updateProfile(data)
        navigate(routes.profile)
    }

    return(
        <main className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="p-10 w-1/2 bg-nav-grey">

                <div>
                    <label className="flex items-center gap-2 mb-1 font-medium"> <FaUser /> Nome </label>
                    <input
                        type="text"
                        name="first_name"
                        className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                        {...register("first_name", {
                            required: "This film is required"
                        })}
                    />
                    {errors.first_name && (
                        <p role="alert" className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
                    )}
                </div>

                <div>
                    <label className="flex items-center gap-2 mb-1 font-medium"> <FaUser /> Cognome </label>
                    <input
                        type="text"
                        name="last_name"
                        className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                        {...register("last_name", {
                            required: "This film is required"
                        })}
                    />
                    {errors.last_name && (
                        <p role="alert" className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
                    )}
                </div>

                <div>
                    <label className="flex items-center gap-2 mb-1 font-medium"> <FaUser /> Username </label>
                    <input
                        type="text"
                        name="username"
                        className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                        {...register("username", {
                            required: "This film is required"
                        })}
                    />
                    {errors.username && (
                        <p role="alert" className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>

                <button
                    className="w-full py-3 rounded-xl btn btn-neutral">
                    Modifica
                </button>

            </form>

            <form className="p-10 bg-nav-gray w-1/2" onSubmit={handleAvatarSubmit}>
                <input
                type="file"
                className="file-input file-input-lg w-full mb-5"
                onChange={handleChange}
                />
                <button className="btn btn-neutral p-5">Change Avatar</button>
            </form>
            <img src={preview} alt="" className="w-50" />

        </main>
    )
}