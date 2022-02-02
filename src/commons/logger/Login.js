import { React } from "react";
import { postUserLoged } from "../../state/registration";
import { useDispatch } from "react-redux";
import useInput from "../../hook/useInput";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postUserLoged({ email: email.value, password: password.value })
    )
    .then((data) => {
      if (data.type === "userLoged/fulfilled") {
        toast.success("Logueo exitoso!, redirigiendo...", {
          duration: 4000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else if (data.type === "userLoged/rejected") {
        toast.error("Error Login :( , verifica correo y/o contraseña", {
          duration: 4000,
          position: "top-center",
        });
      }
    });
  };

  //poner un then con una notificacion

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-600  to-red-500">
      <div className="w-full h-full md:w-1/3 shadow-2xl bg-white p-16 rounded  ">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 flex justify-center">
          Inicia sesión
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-bold text-gray-500">Email</label>
            <input
              {...email}
              type="email"
              className=" w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Contraseña
            </label>
            <input
              {...password}
              type="password"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>

          <Link to="/register">
            <p className="border text-blue-400 hover:text-blue-700 font-bold text-center mt-5">
              ¿No tenes cuenta? Registrate
            </p>
          </Link>

          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
