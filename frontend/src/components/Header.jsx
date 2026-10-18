import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../config/firebase";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [log,setLog] = useState(false)

    useEffect(()=>{
        auth.onAuthStateChanged(function(user){
            if(user){
                setLog(true)
            }
            else{
                setLog(false)
            }
        })
    },[])

    const links = [
        "Home",
        "About",
        "Blogs",
    ];

    function handleLogout(){
        signOut(auth)
    }

    return (
        <header className="shadow-lg sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">

                <a href="#home" className="text-2xl font-bold tracking-tight text-gray-900">Selva<span className="text-violet-600">kumar</span></a>

                <ul className="hidden lg:flex items-center gap-7">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors duration-200"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">

                    {log ?<a onClick={handleLogout} className="cursor-pointer hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold shadow-md shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg">Logout</a>:
                     <a href="/login" className=" cursor-pointer hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold shadow-md shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-lg">Login</a>
                    }
                    
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-violet-50 transition-colors"
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white px-5 py-4">
                    <ul className="flex flex-col gap-1">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}

                        <li className="sm:hidden pt-2">
                            {log?
                            <a onClick={handleLogout} className="block text-center rounded-xl bg-violet-600 px-4 py-3 text-white font-semibold">Logout</a>:
                            <a href="/login" className="block text-center rounded-xl bg-violet-600 px-4 py-3 text-white font-semibold">Login</a>
                            }
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;