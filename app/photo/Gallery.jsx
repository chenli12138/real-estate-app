import React from "react";
import Image from "next/image";
import Interior from "../assets/interior.webp";

const Gallery = () => {
  return (
    <div className="flex flex-col sm:grid gap-4 sm:grid-cols-fluid sm:mx-20 mt-8 sm:mt-16 mx-4">
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
      <Image
        className=" object-cover"
        src={Interior}
        width={900}
        height={600}
        alt="interior"
      ></Image>
    </div>
  );
};

export default Gallery;
