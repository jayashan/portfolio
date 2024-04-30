"use client"

import Image from "next/image";
import { useState, useEffect } from 'react'
import Loading from "./loading";
import style from "@/components/style.module.css"
import './globals.css'
import profilePic from '@/components/img/anton.png'


export default function Home() {

 const[loading,setLoading]=useState(true);

 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },6000);
 },[]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading?<Loading/>: <h1>app content</h1>
      
      }
    </main>
  );
}
