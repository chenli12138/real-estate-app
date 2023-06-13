"use client";
import React, { useEffect, useState } from "react";
export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black opacity-0 fadeIn"></div>
      <video
        className="w-screen h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videoBg.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-6xl animate-drop">Le Vision Atelier</h1>
        <p className="sm:m-4 m-2 text-sm sm:text-lg animate-move-up">
          Capturing Spaces, Inspiring Dreams
        </p>
      </div>
    </>
  );
}
