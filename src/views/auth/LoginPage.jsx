import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    const {login} = useContext(UserContext)

    const onSubmit = async (user_data)=>{
        
        await login({
            email: user_data.email,
            password: user_data.password,
        })
        navigate('/')
    };

  return (
    <main className="h-screen flex justify-center items-center p-4">
      <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Accedi</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="flex items-center gap-2 mb-1 font-medium">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
              {...register("email", {
                required: "L'email è obbligatoria",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 mb-1 font-medium">
              <FaLock /> Password
            </label>
            <input
              type="password"
              className="w-full border rounded-xl p-3 focus:ring focus:outline-none"
              {...register("password", {
                required: "La password è obbligatoria",
                minLength: {
                  value: 8,
                  message: "La password deve essere lunga almeno 8 caratteri",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Accedi
          </button>
        </form>
      </section>
    </main>
  );
}