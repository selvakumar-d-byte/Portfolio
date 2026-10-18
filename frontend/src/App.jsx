import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<><Home/><About/><Blogs/></>}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Signup' element={<Signup />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App