"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState, useEffect, useCallback } from "react";

export default function Profile() {
    const router=useRouter()
    const [user, setUser] = useState<any>(null);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [loadingLogout, setLoadingLogout] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const Logout= async()=>{
        try {
            setLoadingLogout(true);
            await axios.get("/api/users/logout")
            toast.success("Logout successful!")
            router.push("/")
        } catch (error:any) {
            console.log(error.message);
            console.log(toast.error(error.message));
        } finally {
            setLoadingLogout(false);
        }
    }
    const getUserDetails = useCallback(async () => {
        try {
            setLoadingDetails(true);
            const response=await axios.get("/api/users/me")
            console.log(response.data);
            setUser(response.data.data)
        } catch (error:any) {
            console.log(error.message);
            console.log(toast.error(error.message));
        } finally {
            setLoadingDetails(false);
        }
    }, []);

    useEffect(() => {
        getUserDetails();
    }, [getUserDetails]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-10 shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Profile</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Welcome to your profile page
                    </p>
                </div>

                <div className="space-y-6">
                    {user ? (
                        <>
                            {/* Profile Avatar */}
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    {user.username.charAt(0).toUpperCase()}
                                </div>
                            </div>

                            {/* User Details */}
                            <div className="space-y-4">
                                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Username</h2>
                                            <p className="text-sm text-gray-700">{user.username}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Email</h2>
                                            <p className="text-sm text-gray-700">{user.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">User ID</h2>
                                            <p className="text-sm text-gray-700">
                                                <Link
                                                    href={`/profile/${user._id}`}
                                                    className="text-indigo-600 hover:text-indigo-500 font-medium underline"
                                                >
                                                    {user._id}
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <p className="text-sm text-gray-600">Click 'Get Details' to load your profile information</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <button
                            onClick={getUserDetails}
                            disabled={loadingDetails}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out ${
                                loadingDetails ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {loadingDetails ? "Loading..." : "Get Details"}
                        </button>

                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Logout</h3>
                            <p className="text-sm text-gray-600 mb-6">Are you sure you want to logout?</p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        Logout();
                                    }}
                                    disabled={loadingLogout}
                                    className={`flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-150 ease-in-out ${
                                        loadingLogout ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {loadingLogout ? "Logging out..." : "Logout"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}