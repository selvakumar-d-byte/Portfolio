import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import auth from "../config/firebase";

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  

    async function handleSignup(e) {
        e.preventDefault()

        if (!emailRegex.test(email)) {
            setError('Email not valid')
            return;
        }

        if (password !== confirmPassword) {
            setError('Password mismatch')
            return;
        }

        if (password.length < 6) {
            setError('Password should atleast 6 charecters')
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await signOut(auth)

            navigate('/login')
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">

                <h2 className="text-3xl font-bold text-gray-900 text-center">Sign Up</h2>
                <p className="text-gray-600 text-center mt-2">Create your account</p>

                <form className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" required />

                    <label className="block text-sm font-medium text-gray-700 mt-5 mb-2">Email</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" required />

                    <label className="block text-sm font-medium text-gray-700 mt-5 mb-2">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Create a password" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" required />

                    <label className="block text-sm font-medium text-gray-700 mt-5 mb-2">Confirm Password</label>
                    <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" placeholder="Confirm your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-violet-500" required />

                    {error ? <p className="text-red-600 pt-2">{error}</p> : null}

                    <button onClick={handleSignup} type="submit" className="w-full mt-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors">Sign Up</button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-violet-600 font-semibold hover:text-violet-800">Login</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
