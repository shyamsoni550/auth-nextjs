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
                        <div className="text-center space-y-4">
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">Username</h2>
                                <p className="mt-1 text-sm text-gray-600">{user.username}</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">Email</h2>
                                <p className="mt-1 text-sm text-gray-600">{user.email}</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">User ID</h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    <Link
                                        href={`/profile/${user._id}`}
                                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                                    >
                                        {user._id}
                                    </Link>
                                </p>
                            </div>
                        </div>
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