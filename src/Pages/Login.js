import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://credenhealth.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Using the provided credentials
      });

      const data = await response.json();

      if (response.ok) {
        // Login Success
        console.log('Login successful:', data);

        // Save token and admin id to localStorage
        if (data.token) {
          localStorage.setItem('authToken', data.token); // Save token
        }
        if (data.admin && data.admin.id) {
          localStorage.setItem('adminId', data.admin.id); // Save admin id
        }

        // Redirecting to the dashboard
        navigate('/dashboard');
      } else {
        // Handle API errors
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      // Handle network errors
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          {/* Redeemly Text */}
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">Redeemly</h1>
          
          {/* Vendor Login Heading */}
          <h2 className="text-xl font-bold text-center text-gray-800">Vendor Login</h2>

          {error && (
            <div className="p-3 text-red-600 bg-red-100 rounded-md shadow-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500 focus:border-teal-600 transition duration-200"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500 focus:border-teal-600 transition duration-200"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className={`w-full p-3 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-200 transform ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Dashboard Button */}
          <button
            onClick={handleDashboardClick}
            className="w-full p-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center p-4 md:p-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/575/406/large_2x/a-set-of-colorful-shopping-bags-with-handles-paper-shopping-bags-close-up-shopping-days-concept-by-ai-generated-free-photo.jpg"
            alt="Staff Login Illustration"
            className="object-cover w-full h-auto rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
