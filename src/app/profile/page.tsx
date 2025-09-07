"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Profile() {
    const router=useRouter()
    const Logout= async()=>{
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout successful!")
            router.push("/login")
        } catch (error:any) {
            console.log(error.message);
            console.log(toast.error(error.message));
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <hr />
            <button onClick={Logout} className="bg-red-500 text-white mt-4 py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out cursor-pointer hover:scale-105" >Logout</button>
        </div>
    );
}