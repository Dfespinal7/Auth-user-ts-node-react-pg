import { Link } from "react-router-dom"
import Alert from "../components/Alert"
import { handleContext } from "../context/AuthContext"

export default function Login() {
  const { handleInputLogin, handleSubmitLogin, alert, messageAlert, userLogin } = handleContext()
  return (
    <div className="bg-gradient-to-br from-zinc-950 to-zinc-800 text-zinc-100 h-screen flex justify-center items-center flex-col gap-4">
      {alert && (
        <Alert message={messageAlert.message} style={messageAlert.style}></Alert>
      )}

      <div className="p-8 bg-white/20 backdrop-blur-lg w-96 h-auto flex flex-col justify-center items-center rounded-xl shadow-lg transform transition-all duration-500 ease-in-out">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Login</h1>
        <form onSubmit={handleSubmitLogin} className="flex flex-col gap-4 w-full justify-between">
          <input
            className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            value={userLogin.email}
            name="email"
            type="text"
            placeholder="Enter your Email"
            onChange={handleInputLogin}
          />
          <input
            className="bg-zinc-800 text-gray-200 px-4 py-2 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            value={userLogin.password}
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={handleInputLogin}
          />
          <button className="bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white py-2 mt-4 cursor-pointer transition-all duration-200 shadow-lg hover:scale-105">
            Login
          </button>
        </form>
      </div>
      <p>Do you have an Account? <Link to={'/register'} className="text-blue-600">Click on me</Link></p>
    </div>
  )
}