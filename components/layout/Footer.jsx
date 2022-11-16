import React from "react";
import Title from "../ui/Title";
import { MdLocationPin } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto text-white py-3 ">
        <div className="flex justify-center items-center flex-wrap">
          <div className="md:flex-1">
            <div className="flex flex-col justify-center items-center">
              <Title addClass="text-[30px]">Contact Us</Title>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center">
                  <MdLocationPin />
                  <span className="inline-block ml-2">Location</span>
                </div>
                <div className="flex items-center">
                  <BsTelephone />
                  <span className="inline-block ml-2">Call +49 1234567890</span>
                </div>
                <div className="flex items-center">
                  <FiMail />
                  <span className="inline-block ml-2">
                    tokyorestaurant@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center items-center">
              <div className="relative w-40 h-40">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col justify-center items-center">
              <Title addClass="text-[30px]">Opening Hour</Title>
              <div className="flex flex-col gap-y-2">
                <span>Monday-Friday = 12:00-00:00</span>
                <span>Saturday = 12:00-02:00</span>
                <span>Sunday = Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">
            © 2022 All Rights Reserved By TyroFox LTD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
