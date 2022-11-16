import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex px-10 p-16 min-h-[calc(100vh_-_290px)]">
      <div className="border-[2px] rounded-lg border-secondary w-56 h-fit">
        {/* Photo and Name */}
        <div className="relative flex flex-col items-center px-10 py-5">
          <Image
            src="/images/client1.jpg"
            alt="customer"
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">Anna Doe</b>
        </div>

        {/* Menu */}
        <ul className="font-gochifont ">
          <li className="border w-full p-2 hover:bg-secondary hover:text-white cursor-pointer transition-all active:bg-secondary active:text-white">
            <i className="fa fa-thin fa-address-card"></i>
            <button className="ml-2">Account</button>
          </li>
          <li className="border w-full p-2 hover:bg-secondary hover:text-white  cursor-pointer">
            <i className="fa fa-solid fa-lock"></i>
            <button className="ml-2">Password</button>
          </li>
          <li className="border w-full p-2 hover:bg-secondary hover:text-white  cursor-pointer">
            <i className="fa fa-cutlery"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li className="border w-full p-2 hover:bg-secondary hover:text-white  cursor-pointer">
            <i className="fa fa-sign-out"></i>
            <button className="ml-2">Sign Out</button>
          </li>
        </ul>
      </div>

      {/* Profile Details */}
      <div></div>
    </div>
  );
};

export default Profile;
