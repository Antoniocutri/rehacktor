import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import supabase from "../../database/supabase";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {signUp} = useContext(UserContext)

    const navigate = useNavigate()

    const onSubmit = async (user_data)=>{
        
        await signUp({
            email: user_data.email,
            password: user_data.password,
            options: {
                data: {
                    first_name: user_data.first_name,
                    last_name: user_data.last_name,
                    username: user_data.username
                }
            }
        })

        navigate('/')
    };


    return(
        <>
            <main className="h-screen flex justify-center items-center p-4">
                <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Registrati</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
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

                        <div>
                            <label className="flex items-center gap-2 mb-1 font-medium"> <FaEnvelope /> Email </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                                {...register("email", {
                                    required: "This film is required"
                                })}
                            />
                            {errors.email && (
                                <p role="alert" className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 mb-1 font-medium"> <FaLock /> Password </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                                {...register("password", {
                                    required: "This film is required", 
                                    minLength: 8,
                                })}
                            />
                            {errors.password && (
                                <p role="alert" className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            className="w-full py-3 rounded-xl btn btn-neutral">
                            Registrati
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}