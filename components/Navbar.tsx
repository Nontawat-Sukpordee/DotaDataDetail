import Link from "next/link"; // make it to components for easy edit and easy use

//rafce
const Navbar = () => {
  return ( //text-2x1 is size text
    <>
        <nav className = "flex justify-between text-2x1">
            <div className = "flex gap-4">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/camp"}>Camp</Link>
                <Link href={"/info"}>Info</Link>
                <Link href={"/heroes"}>Heroes</Link>
            </div>
            <div className = "flex gap-4">
                <Link href={"/register"}>Register</Link>
                <Link href={"/login"}>Login</Link>
            </div>
        </nav>
        <hr className = "mb-4"/> 
    </>// hr ขีดเส้นใต้ไว้เฉยๆ <></> คือตัวเว้นเปล่าเฉยๆ
  )
}
export default Navbar