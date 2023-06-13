"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiFillWechat, AiOutlineInstagram } from "react-icons/ai";
import WechatModal from "./WechatModal";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  //set hook for menu
  const [isOpen, setOpen] = useState(false);
  const openHanlder = () => {
    setOpen(!isOpen);
  };
  // set hook for wechat modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => console.log(pathname), [currentPath]);

  return (
    <>
      <nav className="invisible sm:visible absolute top-0 w-screen h-[5vh]  z-10 flex justify-around mt-4 items-center">
        <Link
          className="sm:text-3xl"
          href="/"
          onClick={() => setCurrentPath("")}
        >
          LE VISION
        </Link>
        <div>
          <ul className="flex text-gray-100  text-sm sm:text-lg ">
            {/* underline underline-offset-[0.25rem] decoration-2 */}
            <Link
              onClick={() => setCurrentPath("offering")}
              href="/offering"
              className=" hover:text-white hover:scale-110 sm:mx-2"
              style={
                currentPath === "offering" ? { borderBottom: "solid 2px" } : {}
              }
            >
              <li>OFFERING</li>
            </Link>
            <Link
              onClick={() => setCurrentPath("photo")}
              href="/photo"
              className=" hover:text-white hover:scale-110 sm:mx-2"
              style={pathname === "/photo" ? { borderBottom: "solid 2px" } : {}}
            >
              <li>PHOTO</li>
            </Link>
            <Link
              href="/video"
              className=" hover:text-white hover:scale-110 sm:mx-2"
            >
              <li>VIDEO</li>
            </Link>
            <Link
              href="/connect"
              className=" hover:text-white hover:scale-110 sm:mx-2"
            >
              <li>CONNECT</li>
            </Link>
          </ul>
        </div>
        <div className=" flex gap-4">
          <Link
            className=" hover:scale-110"
            href="https://www.instagram.com/levisionatelier/"
            target="_blank"
          >
            <AiOutlineInstagram className="text-3xl" />
          </Link>
          <div>
            <AiFillWechat
              onClick={handleIconClick}
              className="cursor-pointer text-3xl hover:scale-110"
            />

            {isModalOpen && (
              <WechatModal imageUrl="/wechat.png" onClose={closeModal} />
            )}
          </div>
        </div>
      </nav>

      <nav className="absolute top-0 w-screen h-[5vh] z-10 flex justify-between mt-4 px-4 sm:invisible">
        <Link className="text-2xl" href="/">
          LE VISION
        </Link>
        <FiMenu className="cursor-pointer text-2xl" onClick={openHanlder} />
        <div
          className={`fixed top-0 right-0 h-screen w-[100%] bg-black transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out z-40`}
        >
          <FiX
            className="text-white absolute right-4 top-4 cursor-pointer text-4xl"
            onClick={openHanlder}
          />
          <ul className="text-white text-2xl flex flex-col items-center mt-16 h-full">
            <li className="mt-8">
              <a href="/offering" onClick={openHanlder}>
                OFFERING
              </a>
            </li>

            <li className="ml-3">
              {" "}
              <a href="/photo" onClick={openHanlder}>
                PHOTO
              </a>
            </li>
            <li className="ml-3">
              {" "}
              <a href="/video" onClick={openHanlder}>
                VIDEO
              </a>
            </li>
            <li className="ml-3">
              <a href="/connect" onClick={openHanlder}>
                CONNECT
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`fixed top-0 left-0 w-sreen h-screen bg-black bg-opacity-70 z-30 ${
            isOpen ? "visible" : "invisible"
          }`}
        />
        <div className=" right-14 absolute flex gap-4">
          <Link
            href="https://www.instagram.com/levisionatelier/"
            target="_blank"
          >
            <AiOutlineInstagram className="text-2xl" />
          </Link>
          <div>
            <AiFillWechat
              onClick={handleIconClick}
              className="cursor-pointer text-2xl"
            />

            {isModalOpen && (
              <WechatModal imageUrl="/wechat.png" onClose={closeModal} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
