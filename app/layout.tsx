import Link from "next/link";
import Navbar from "@/components/Navbar";
import "./globals.css" // to make it change to all page
import { describe } from "node:test";
import { Metadata } from "next";

// Layout it make a same thing to Other page 


export const metadata: Metadata = {
  title:'Dota2 NextJS',//Change Text title Head Website Tab
  description: 'Dota2DataDetail',
  keywords:'Dota2,Build,Thailand,Detail'
};

//rafce
const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout