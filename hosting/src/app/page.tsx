"use client"; // This is a client component 👈🏽
// import '../config/envConfig'
import '../ui/global.css'

import { useEffect } from "react";

export default function Page() {
  useEffect(()=>{
    console.log(process.env)
  })
  
  return <h1 className="text-3xl font-bold underline">Hello, page.js!</h1>;
}
