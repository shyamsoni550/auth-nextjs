import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-indigo-600">UserHub</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            A comprehensive authentication system built with Next.js, featuring secure user management,
            email verification, and password recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300 ease-in-out"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600">Everything you need for secure user authentication</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Registration</h3>
            <p className="text-gray-600">User-friendly signup with email verification to ensure account security.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Password Recovery</h3>
            <p className="text-gray-600">Forgot your password? No problem. Secure reset via email verification.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Profile Management</h3>
            <p className="text-gray-600">View and manage your user profile with ease and security.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Integration</h3>
            <p className="text-gray-600">Seamless email notifications for verification and password recovery.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Built with modern security practices and reliable technologies.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Responsive</h3>
            <p className="text-gray-600">Optimized for speed with a responsive design that works on all devices.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white bg-opacity-50 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Built with Next.js, TypeScript, MongoDB, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
