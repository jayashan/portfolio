"use client";
import Image from "next/image";


export default async function Home() {
  await new Promise(resolve=>setTimeout(resolve,6000))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>home page</h1>
    </main>
  );
}
