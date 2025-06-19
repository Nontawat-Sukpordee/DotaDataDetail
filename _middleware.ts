import { NextResponse } from "next/server"
// ถ้าจะใช้ไฟล์นี้เอา_ ออกจากชื่อไฟล์
export const middleware =(req:Request) =>{
    console.log('Hello Middleware')
    return NextResponse.redirect(new URL("/", req.url))
}
//ทุกหน้าที่ทำงานจะต้องมาผ่านmiddleware

export const config = {
    matcher: ['/info/:path*','/about/:path*'], //กันไว้ไม่ให้เข้า
}