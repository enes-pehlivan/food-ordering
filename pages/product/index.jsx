import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";
import { CgBowl } from "react-icons/cg";

const Index = () => {
  return (
    <div className="flex h-screen items-center gap-10 py-24 flex-wrap justify-center ">
      <div className="relative md:flex-1 w-[80%] h-[80%]">
        <Image
          src="/images/ramen1.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="md:flex-1 md:pr-24 md:text-start text-center">
        <Title addClass="text-4xl">TOKYO RAMEN</Title>
        <span className="font-boldfont text-2xl underline underline-offset-2 inline-block my-4">
          $20
        </span>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          deserunt a, eos officiis fugiat nulla expedita optio, iusto aspernatur
          eum quos vero velit? Doloribus inventore, dicta ipsum eveniet cum
          provident?
        </p>
        <div className="flex gap-x-20 items-center md:justify-start justify-center">
          <h3 className="text-xl font-bold">Choose the size:</h3>
          <div className="flex gap-x-20 items-center">
            <div className="relative">
              <CgBowl size={30} />
              <span className="absolute -top-3 -left-6  text-xs bg-secondary text-white rounded-xl px-[5px] py-[2px] font-medium">
                Small
              </span>
            </div>
            <div className="relative">
              <CgBowl size={40} />
              <span className="absolute -top-2 -left-7  text-xs bg-secondary text-white rounded-xl px-[5px] py-[2px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative">
              <CgBowl size={50} />
              <span className="absolute -top-1 -left-6  text-xs bg-secondary text-white rounded-xl px-[5px] py-[2px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-secondary" />
            <span className="text-sm font-semibold">Ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-secondary" />
            <span className="text-sm font-semibold">Ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-secondary" />
            <span className="text-sm font-semibold">Ketchup</span>
          </label>
        </div>
        <button className="text-3xl font-boldfont bg-secondary text-white rounded-md p-3">
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Index;
