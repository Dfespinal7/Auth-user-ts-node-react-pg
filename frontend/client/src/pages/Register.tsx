import { Link } from "react-router-dom"
import Alert from "../components/Alert"
import { handleContext } from "../context/AuthContext"
export default function Register() {
    const{handleChangeRegisterInput,handleRegisterSubmit,alert,messageAlert,userRegister}=handleContext()
    
  return (
    <div className="bg-slate-900 h-screen flex  justify-center items-center">
      <div className="bg-zinc-950 w-[40%] h-full flex justify-center items-center">
        <div className=" gap-3 bg-zinc-950 w-[50%] h-[50%] border-gray-400  rounded-md text-gray-400 flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl">Welcome back</h1>
          <p className="font-light">To keep connected with us please login with your personal info</p>
          <Link to={'/login'}><button className="bg-slate-800 px-2 py-1 rounded-3xl font-bold w-30 cursor-pointer hover:scale-105 transition-all duration-200">Sign in</button></Link>
        </div>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center gap-2" >
        <h1 className="text-3xl font-bold text-gray-400">Create new Account</h1>
        {
          alert&&(
            <Alert message={messageAlert.message} style={messageAlert.style}></Alert>
          )
        }
        <div className="">
          <form action="" onSubmit={handleRegisterSubmit} className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-2">
            <input value={userRegister.name} type="text" name="name" onChange={handleChangeRegisterInput} placeholder="Enter Your name" className=" p-2 bg-slate-800 rounded-lg text-gray-400 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <input value={userRegister.lastName} onChange={handleChangeRegisterInput} name="lastName" type="text"  placeholder="Enter Your lastname" className=" p-2 bg-slate-800 rounded-lg text-gray-400 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <input value={userRegister.email} type="email" name="email" onChange={handleChangeRegisterInput}  placeholder="Enter Your email" className="w-full  p-2 bg-slate-800 rounded-lg text-gray-400 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
          <input value={userRegister.password} type="password" name="password" onChange={handleChangeRegisterInput}  placeholder="Enter Your password" className="w-full  p-2 bg-slate-800 rounded-lg text-gray-400 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
          <button className="px-2 py-1 bg-slate-400 rounded-lg cursor-pointer font-bold text-white hover:scale-105 transition-all duration-200">Register</button>
        </form>
        </div>
      </div>
      
    </div>
  )
}
