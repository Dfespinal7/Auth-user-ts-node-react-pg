import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import AuthContext from "./context/AuthContext"
import IndesxPage from "./pages/IndesxPage"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./pages/Login"


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContext>
          <Routes>
            <Route path="/" element={<ProtectedRoute><IndesxPage></IndesxPage></ProtectedRoute>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </AuthContext>
      </BrowserRouter>
    </>
  )
}

export default App
