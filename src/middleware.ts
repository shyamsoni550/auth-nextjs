import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    const ispublicpath=path==="/login"||path==="/signup";
    const token=request.cookies.get("token")?.value;
    if(ispublicpath && token){
        return NextResponse.redirect(new URL("/profile",request.url))
    }
    if(!ispublicpath && !token){
        return NextResponse.redirect(new URL("/login",request.url))
    }
    return NextResponse.next();
}
 
export const config = {
  matcher: 
  [
    "/","/login","/profile","/signup","/profile/:path*"
  ],
}