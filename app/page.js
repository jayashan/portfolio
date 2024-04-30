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
    <main>
      {loading?<Loading/>:
          <div className="flex flex-col w-auto sm:w-auto">
          <section className="bg-gray-100 dark:bg-gray-200 py-12 md:py-24 lg:py-32 max-w-full">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0">
                <Image class="inline-block w-32 rounded-full ring-2 ring-white transition ease-in-out delay-150 hover:scale-110 duration-300" src={profilePic} alt=""></Image>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ANTON JAYASHAN</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2 md:text-xl">Full-Stack Developer</p>
                <p className="text-gray-500 text-center dark:text-gray-400 mt-4 max-w-[600px] md:text-xl">
                  I am a passionate full-stack developer with a strong background in building modern web applications. I
                  love creating intuitive and user-friendly interfaces that solve real-world problems !.
                </p>
              </div>
            </div>
            </section>
          </div>
      }
    </main>
  );
}
