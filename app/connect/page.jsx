"use client";
import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Link from "next/link";

const connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [options, setOptions] = useState([]);
  const CheckboxService = [
    "Full Campaign - Photo & Video",
    " Just Video",
    "Just Photo",
    "Other",
  ];
  const bookingTime = ["1-2 Weeks Away", "One Month + away"];
  const content = [
    " Selling Lxury Home ",
    "Rental Property",
    "Interior Design",
    "AirBnB / Travel / Tourism",
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setOptions([...options, value]);
      console.log(options);
    } else {
      setOptions(options.filter((option) => option !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, such as sending an email or saving the form data
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Options:", options);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setOptions([]);
  };
  return (
    <>
      <div className="w-screen text-center mb-auto">
        <h1 className=" text-4xl sm:text-5xl pt-20 sm:pt-20 md:pt-28">
          Contact Us
        </h1>
        <p className="mt-8 mx-8 sm:mt-12 lg:mx-96 text-xs sm:text-sm font-thin text-left">
          Unlock the best results for your real estate goals with our
          exceptional services. From selling to property management, we are here
          to do the presenting make your listing stand out. Trust us to help you
          achieve success in the dynamic Sydney real estate market. Get in touch
          today!
        </p>

        <div>
          <h1 className="mt-4 sm:mt-8 mb-2">
            I'm interested in this service *
          </h1>
          <div className="mx-8 text-center">
            {CheckboxService.map((name) => (
              <Checkbox
                key={name}
                checkboxName={name}
                handler={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="mt-4 sm:mt-8 mb-2">I'm interested in booking this*</h1>
          <div className="mx-8 text-center">
            {bookingTime.map((time) => (
              <Checkbox
                key={time}
                checkboxName={time}
                handler={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="mt-4 sm:mt-8 mb-2">I need marketing content for *</h1>
          <div className="mx-8 text-center">
            {content.map((type) => (
              <Checkbox
                key={type}
                checkboxName={type}
                handler={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
      </div>
      <h1 className="mt-4 sm:mt-8 sm:text-center sm:mb-2 mx-8 ">
        Tell us more!
      </h1>
      <h1 className="mb-4 sm:text-center mx-8 text-gray-500">
        We would love to hear any awesome ideas you have for your project, or
        any questions you might have!
      </h1>
      <div className="w-screen md:px-56 lg:px-96 sm:px-48 px-8">
        <textarea
          className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
        ></textarea>
      </div>
      <div className="sm:flex sm:mx-96 sm:gap-4">
        <div className="w-full px-8 sm:px-0">
          <h1 className="my-1 sm:mt-2 sm:text-center text-left">Your Name*</h1>
          <textarea
            className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
          ></textarea>
        </div>
        <div className="w-full px-8 sm:px-0">
          <h1 className="my-1 sm:mt-2 sm:text-center text-left">
            Phone Number*
          </h1>
          <textarea
            className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
          ></textarea>
        </div>
      </div>
      <div className="w-screen md:px-56 lg:px-96 sm:px-48 px-8">
        <h1 className="my-1 sm:mt-2 sm:text-center text-left">Your Email*</h1>
        <textarea
          className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
        ></textarea>
      </div>
      <div className="text-center mt-2 mb-8">
        <a
          className=" bg-white text-black p-2 hover:bg-gray-600 hover:text-white"
          href="/connect"
        >
          Instant Quote
        </a>
      </div>
    </>
  );
};

export default connect;
