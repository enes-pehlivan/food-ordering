import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-14">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-4xl">SPEISEKARTE</Title>
        <div className="mt-12">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white ">
            Sterne der Woche
          </button>
          <button className="px-6 py-2 rounded-3xl">Ramen</button>
          <button className="px-6 py-2 rounded-3xl">Sushi</button>
          <button className="px-6 py-2 rounded-3xl">Dessert</button>
        </div>
      </div>
      <div className="mt-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
