import React, { useEffect, useState } from 'react';
import loginBg from '../../../assets/loginBg.jpeg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/FakeAuthContext';
import Nav from './Nav';

function Login() {


    const navigate = useNavigate();
    const { login, isAuthenticated, role } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        if (email && password) {
            login(email, password);
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            if (role === 'admin') {
                navigate('/admin', { replace: true });
            } else if (role === 'trainer') {
                navigate('/trainer', { replace: true });
            } else if (role === 'trainee') {
                navigate('/', { replace: true });
            }
        }
    }, [isAuthenticated, role, navigate]);

    return (
        <>
            <div className="bg-red-200 w-full h-screen bg-cover bg-around" style={{ backgroundImage: `url(${loginBg})` }}>
                <Nav />

                <div className='flex justify-center mt-20'>
                    <div className="relative w-full max-w-sm p-4 bg-white bg-opacity-45 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                            <img src="../../../assets/" alt="Avatar" className="w-20 h-20 rounded-full border-2 border-gray-300" />
                        </div>
                        <form className="space-y-4 mt-4" onSubmit={handleLogin}>
                            <h5 className="text-xl font-medium text-gray-800">Sign in</h5>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-800">Your email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" name="email" id="email" className="border-b-2 text-gray-800 text-sm rounded-lg block w-full p-2.5" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-800">Your password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                    </div>
                                    <label className="ml-2 text-sm font-medium text-gray-800">Remember me</label>
                                </div>
                                <a href="#" className="ml-auto text-sm hover:underline text-gray-800">Lost Password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            <div className="text-sm font-medium text-gray-800">
                                Not registered? <a href="#" className="hover:underline text-red-900">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
