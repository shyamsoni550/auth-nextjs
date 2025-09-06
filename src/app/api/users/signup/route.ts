import { connectToDatabase } from "@/dbconfig/dbconfig";
import User from "@/models/userModel"
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";

await connectToDatabase();

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json()
        const { username, email, password } = reqbody

        // Validation
        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields (username, email, password) are required" }, { status: 400 })
        }

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashpassword
        })

        const saveduser = await newUser.save()
        console.log(saveduser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            saveduser
        })
    } catch (e: any) {
        console.error("Signup error:", e);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
