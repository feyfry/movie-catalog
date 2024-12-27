import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout, user } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="bg-[#ECF1F0] fixed w-full top-0 z-50 border-b-4 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo dan Navigation Links */}
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-3xl font-black text-black hover:-rotate-2 transition-all duration-200">
                                MovieCatalog
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:ml-8 sm:flex sm:space-x-4 items-center">
                            <Link
                                to="/"
                                className={`px-4 py-2 font-bold text-lg rounded-lg border-4 border-black
                                ${location.pathname === '/'
                                        ? 'bg-[#FEE12B] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                        : 'bg-white hover:bg-[#FEE12B] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200'
                                    }`}
                            >
                                Home
                            </Link>
                        </div>
                    </div>

                    {/* Authentication Buttons - Desktop */}
                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <span className="font-bold text-black bg-[#93D2FD] px-4 py-2 rounded-lg border-4 border-black">
                                    Welcome, {user?.username}!
                                </span>
                                <button
                                    onClick={logout}
                                    className="font-bold text-white bg-[#FF3EA5] px-4 py-2 rounded-lg border-4 border-black
                                    hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="font-bold text-black bg-[#93D2FD] px-4 py-2 rounded-lg border-4 border-black
                                    hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="font-bold text-white bg-[#FF3EA5] px-4 py-2 rounded-lg border-4 border-black
                                    hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg border-4 border-black bg-[#FEE12B]
                            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Close Icon */}
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-[#ECF1F0] border-t-4 border-black`}>
                <div className="pt-2 pb-3 space-y-2 p-4">
                    <Link
                        to="/"
                        className={`block text-lg font-bold p-3 rounded-lg border-4 border-black 
                        ${location.pathname === '/'
                                ? 'bg-[#FEE12B] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                : 'bg-white hover:bg-[#FEE12B]'
                            }`}
                    >
                        Home
                    </Link>
                </div>
                <div className="pt-4 pb-3 border-t-4 border-black p-4">
                    {isAuthenticated ? (
                        <div className="space-y-2">
                            <span className="block font-bold text-black bg-[#93D2FD] p-3 rounded-lg border-4 border-black">
                                {user?.username}
                            </span>
                            <button
                                onClick={logout}
                                className="w-full text-left font-bold text-white bg-[#FF3EA5] p-3 rounded-lg border-4 border-black"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <Link
                                to="/login"
                                className="block font-bold text-black bg-[#93D2FD] p-3 rounded-lg border-4 border-black"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block font-bold text-white bg-[#FF3EA5] p-3 rounded-lg border-4 border-black"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;