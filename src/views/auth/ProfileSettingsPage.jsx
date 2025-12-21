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
    const navigate = useNavigate()

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
        navigate(routes.profile)
    };

    const {updateProfile} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) =>{
        updateProfile(data)
        navigate(routes.profile)
    }

    return(
        <main className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-10 text-white">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-1 bg-black/60 backdrop-blur-md rounded-2xl p-8 shadow-lg space-y-6"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Modifica Dati</h2>

                <div className="space-y-4">
                <div>
                    <label className="flex items-center gap-2 mb-1 font-medium">
                    <FaUser /> Nome
                    </label>
                    <input
                    type="text"
                    name="first_name"
                    className="w-full border border-gray-700 rounded-xl p-3 bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    {...register("first_name", { required: "This field is required" })}
                    />
                    {errors.first_name && (
                    <p role="alert" className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
                    )}
                </div>

                <div>
                    <label className="flex items-center gap-2 mb-1 font-medium">
                    <FaUser /> Cognome
                    </label>
                    <input
                    type="text"
                    name="last_name"
                    className="w-full border border-gray-700 rounded-xl p-3 bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    {...register("last_name", { required: "This field is required" })}
                    />
                    {errors.last_name && (
                    <p role="alert" className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
                    )}
                </div>

                <div>
                    <label className="flex items-center gap-2 mb-1 font-medium">
                    <FaUser /> Username
                    </label>
                    <input
                    type="text"
                    name="username"
                    className="w-full border border-gray-700 rounded-xl p-3 bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    {...register("username", { required: "This field is required" })}
                    />
                    {errors.username && (
                    <p role="alert" className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>
                </div>

                <button
                className="w-full py-3 rounded-xl btn btn-primary font-semibold"
                >
                Modifica
                </button>
            </form>

            <form
                className="flex-1 bg-black/60 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col items-center"
                onSubmit={handleAvatarSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Cambia Avatar</h2>

                <input
                type="file"
                className="file-input file-input-lg w-full mb-5 text-white"
                onChange={handleChange}
                />

                <button className="w-full py-3 rounded-xl btn btn-primary font-semibold">
                Change Avatar
                </button>

                {preview && (
                <img
                    src={preview}
                    alt="Avatar Preview"
                    className="mt-6 w-32 h-32 rounded-full border-2 border-indigo-500 object-cover"
                />
                )}
            </form>

        </main>
    )
}