import React from "react";
import Landing from "../assets/offering_landing.jpeg";
import Image from "next/image";

const Offering = () => {
  return (
    <>
      <div className="w-screen text-center mb-auto">
        <h1 className=" text-4xl sm:text-5xl pt-20 sm:pt-40">
          Real Estate Offerings
        </h1>
        <div className="mt-8 mx-12 sm:mt-12 text-xs">
          <h1>
            *the custom quotes vary per real estate project,for Builders,
            Architects & Interior
          </h1>
          <h1>Designers For Commercial Licensing or Non-Listing use.</h1>
        </div>
      </div>
      <div className="text-center mx-6 sm:flex sm:mx-40 sm:gap-8 mb-auto">
        <div>
          <h1 className="text-3xl underline my-8">Full Campaign</h1>
          <p className="font-semibold italic">
            Impress your clients,attact future clients & increase brand
            awareness with this all-inclusive combo
          </p>
          <div className=" text-gray-400 font-thin leading-loose my-6">
            <p>- Up to 20 Images</p>
            <p>- Lifestyle Video Edit</p>
            <p>- Social Media Hightlight Trailer</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl underline my-8">Just Video</h1>
          <p className="font-semibold italic">
            A great way to boose awareness and engagement on a featured
            listing,while attacting new clients.
          </p>
          <div className=" text-gray-400 font-thin leading-loose my-6">
            <p>- Drone shot can be added upon request</p>
            <p>- Lifestyle Video Edit</p>
            <p>- Social Media Hightlight Trailer</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl underline my-8">Just Photo</h1>
          <p className="font-semibold italic">
            Cover your essentialsw while filling your Social Media & Listing
            platform with beautiful images.
          </p>
          <div className=" text-gray-400 font-thin leading-loose my-6">
            <p>- Up to 20 Images</p>
            <p>- Fully edited with details</p>
            <p>- Nicely presented with style</p>
          </div>
        </div>
      </div>

      <div className="relative w-screen">
        <Image
          className="w-full h-[40vh] object-cover"
          src={Landing}
          width={1200}
          height={800}
          priority={true}
          alt="Offering Landing Img"
        ></Image>
        <div className="absolute top-0 right-0 w-full h-full bg-slate-800 opacity-40"></div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-center">
          <h1 className="sm:text-4xl text-3xl mx-6">Let's make it happen!</h1>
          <h1 className="text-sm mt-8 mx-16">
            Capturing Spaces, Inspiring Dreams
          </h1>
          <a className=" bg-red-600 p-2 my-8 shadow-md" href="/connect">
            Connect
          </a>
        </div>
      </div>
    </>
  );
};

export default Offering;
