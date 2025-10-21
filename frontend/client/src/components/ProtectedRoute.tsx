import Cookies from 'js-cookie';
import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
type ChildrenProps={
  children:ReactNode
}
export default function ProtectedRoute({children}:ChildrenProps) {
  
  const navigate=useNavigate()
  useEffect(()=>{
    const token=Cookies.get('token')
    if(!token){
      navigate('/login')
    }
  },[navigate])
  return children
}
