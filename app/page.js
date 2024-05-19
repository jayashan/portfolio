"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from 'react'
import Loading from "./loading";
import style from "@/components/style.module.css"
import './globals.css'
import profilePic from '@/components/img/anton.png'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export default function Home() {

  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


 const[loading,setLoading]=useState(true);

 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },6000);
 },[]);


  return (
    <main>
      {loading?<Loading/>:
          
            <>
              <div className="flex flex-col">
                <div className="w-full">
                <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
                </div>
                <div className="m-auto py-10">
                <div className="w-96">
      
      <Image class="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full" src={profilePic} alt=""></Image>
              
    
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          ANTON JAYASHAN
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Full-Stack Developer
          <div className="text-center md:text-left">
                <p className="text-gray-500 text-center dark:text-gray-400 mt-4 max-w-[600px] md:text-xl">
                  I am a passionate full-stack developer with a strong background in building modern web applications. I
                  love creating intuitive and user-friendly interfaces that solve real-world problems !.
                </p>
              </div>
        </Typography>
      </CardBody>
    </div>
                </div>
                <div className="w-full border-solid border-2 border-sky-500">3</div>
                <div className="w-full border-solid border-2 border-sky-500">4</div>
                <div className="w-full border-solid border-2 border-sky-500">5</div>
              </div>

            </>
          
      }
    </main>
  );
}
