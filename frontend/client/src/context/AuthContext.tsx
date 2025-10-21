import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import type { AlertProps } from "../components/Alert"
import { useNavigate } from "react-router-dom"
type ContextProps = {
  userRegister: RegisterProps
  setUserRegister: Dispatch<SetStateAction<RegisterProps>>
  handleChangeRegisterInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  alert: boolean
  messageAlert: AlertProps
  handleInputLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void
  userLogin: LoginProps
  logout: () => void
}
type ChildrenProps = {
  children: ReactNode
}
type LoginProps = {
  email?: string
  password?: string
}

export type RegisterProps = LoginProps & {
  name?: string
  lastName?: string

}


const ContextAuth = createContext<ContextProps | undefined>(undefined)

export const handleContext = () => {
  const context = useContext(ContextAuth)
  if (!context) throw new Error('No hay contexto')
  return context
}

export default function AuthContext({ children }: ChildrenProps) {
  const [userRegister, setUserRegister] = useState<RegisterProps>({ name: '', lastName: '', email: '', password: '' })
  const [userLogin, setUserLogin] = useState<LoginProps>({ email: '', password: '' })
  const [alert, setAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<AlertProps>({ message: '', style: '' })
  const navigate = useNavigate()

  const handleChangeRegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserRegister({ ...userRegister, [name]: value })
  }
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userToSend = {
      ...userRegister,
      name: `${userRegister.name} ${userRegister.lastName}`.trim(),
    };
    console.log(userRegister)
    const result = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userToSend),
      credentials: 'include'
    })
    const data = await result.json()
    if (!result.ok) {
      setAlert(true)
      setMessageAlert({ message: data.message, style: 'bg-slate-800 text-red-300 font-bold px-2 py-1 rounded-lg border border-red-200' })
      setTimeout(() => {
        setAlert(false)
      }, 2000)
      setUserRegister({ name: '', email: '', password: '', lastName: '' })
      return;
    }
    setAlert(true)
    setMessageAlert({ message: 'Registro Exitoso', style: 'bg-slate-800 text-green-300 font-bold px-2 py-1 rounded-lg border border-green-200' })
    setTimeout(() => {
      setAlert(false)
      navigate('/')
    }, 2000)


  }
  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setUserLogin({ ...userLogin, [name]: value })
  }
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userLogin),
      credentials: 'include'
    })
    const data = await result.json()
    if (!result.ok) {
      setAlert(true)
      setMessageAlert({ message: data.message, style: 'bg-red-200 text-red-500 px-4 py-2 rounded-lg border' })
      setUserLogin({ email: '', password: '' })
      setTimeout(() => {
        setAlert(false)
      }, 2000)
      return;
    }
    setAlert(true)
    setMessageAlert({ message: data.message, style: "bg-green-200 text-green-500 px-4 py-2 rounded-lg border" })
    setUserLogin({ email: '', password: '' })
    setTimeout(() => {
      setAlert(false)
      navigate('/')
    }, 2000)
  }
  const logout = async () => {
    try{
      if (window.confirm('Seguro que desea cerrar sesión?')) {
      const result = await fetch('http://localhost:4000/logout', {
        method: 'POST',
        credentials: 'include'
      })
      if (result.ok) {
        navigate('/login')
        return
      }
      console.log(result.status)
    }
    }catch(e){
      console.log(e)
    }
  }
  return (
    <ContextAuth.Provider value={{ logout, userLogin, userRegister, setUserRegister, handleChangeRegisterInput, handleRegisterSubmit, alert, messageAlert, handleInputLogin, handleSubmitLogin }}>
      {children}
    </ContextAuth.Provider>
  )
}
