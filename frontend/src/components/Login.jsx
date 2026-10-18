import { useEffect, useState } from "react";
import auth from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(function(){
        window.scrollTo(0,0)

        auth.onAuthStateChanged(function(user){
            if(user){
                navigate('/')
            }
        })
    },[navigate])

    async function handleLogin(e){
        e.preventDefault()

        try{
            await signInWithEmailAndPassword(auth, email, password)
            alert('Login successfull')
            navigate('/')
        }
        catch{
            alert('Failed')
        }
    }
    
    return (
        <div className="h-[calc(100dvh-73px)] bg-gray-50 flex items-center justify-center px-5">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">

                <h2 className="text-3xl font-bold text-gray-900 text-center">Login</h2>
                <p className="text-gray-600 text-center mt-2">Welcome back!</p>

                <form className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" required/>

                    <label className="block text-sm font-medium text-gray-700 mt-5 mb-2">Password</label>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" required/>

                    <button onClick={handleLogin} type="submit" className="w-full mt-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors">Login</button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-violet-600 font-semibold hover:text-violet-800">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login;
