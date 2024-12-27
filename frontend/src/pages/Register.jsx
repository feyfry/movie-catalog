import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as authService from '../services/auth';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.register(formData);
            toast.success('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#ECF1F0] px-4">
            <div className="w-full max-w-md transform hover:-translate-y-1 duration-300">
                <div className="bg-[#FEE12B] p-8 border-4 border-black rounded-xl
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-5xl font-black mb-8 text-black">
                        Join Us!
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-xl font-bold mb-2 block text-black">
                                Username
                            </label>
                            <input
                                type="text"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="w-full border-4 border-black rounded-lg bg-white text-black p-3 
                                focus:outline-none focus:border-black font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                required
                                placeholder="faiz123"
                            />
                        </div>
                        <div>
                            <label className="text-xl font-bold mb-2 block text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border-4 border-black rounded-lg bg-white text-black p-3 
                                focus:outline-none focus:border-black font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                required
                                placeholder="faiz@example.com"
                            />
                        </div>
                        <div>
                            <label className="text-xl font-bold mb-2 block text-black">
                                Password
                            </label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full border-4 border-black rounded-lg bg-white text-black p-3 
                                focus:outline-none focus:border-black font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                required
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#FF3EA5] text-white border-4 border-black p-4 rounded-lg font-black text-xl
                            hover:bg-[#FF1E8C] transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                        >
                            Create Account →
                        </button>
                        <div className="text-center font-bold text-black mt-4">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[#FF3EA5] hover:underline">
                                Login here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;