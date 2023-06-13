import React from "react";
import Image from "next/image";
import photoMain from "../assets/photo-main.jpeg";
import Gallery from "./Gallery";

const Photo = () => {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Image
          className=" object-cover w-full h-full"
          src={photoMain}
          width={1920}
          height={1080}
          alt="photo main"
          priority={true}
          quality={75}
        />
        <div className="absolute top-0 right-0 w-screen h-screen bg-slate-800 opacity-40"></div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-4xl text-3xl mx-6">
            Stand out on your{" "}
            <span className="font-bold">Social Media & Listings</span> with our
            photography.
          </h1>
          <h1 className="text-sm mt-8 mx-16">
            Get the most form your investment across all platforms.
          </h1>
          <a className=" bg-red-600 p-2 my-8 shadow-md" href="/connect">
            Connect
          </a>
        </div>
      </div>
      <Gallery />
    </>
  );
};

export default Photo;
