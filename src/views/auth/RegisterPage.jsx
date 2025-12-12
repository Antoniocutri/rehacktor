import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =(data)=>console.log(data);


    return(
        <>
            <main className="h-screen flex justify-center items-center bg-gray-100 p-4">
                <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Registrati</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                    <div>
                        <label className="flex items-center gap-2 mb-1 font-medium"> <FaUser /> Nome </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
                            {...register("name", {
                                required: "This film is required"
                            })}
                        />
                        {errors.name && (
                            <p role="alert" className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
                                required: "This film is required"
                            })}
                        />
                        {errors.password && (
                            <p role="alert" className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition">
                        Registrati
                    </button>
                    </form>
                </section>
            </main>
        </>
    )
}