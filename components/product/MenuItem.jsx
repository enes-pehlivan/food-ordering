import Image from "next/image";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-b-xl rounded-t-3xl">
        <div className="relative w-44 h-40 hover:scale-110 transition-all">
          <Image src="/images/ramen1.png" alt="" fill />
        </div>
      </div>
      <div className="p-[25px] text-white font-boldfont">
        <h4 className="text-xl">Tokyo Ramen</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex at,
          aut adipisci corporis, laborum totam ducimus ipsum temporibus natus
          non quaerat eligendi, voluptas vel ab reiciendis molestias ullam.
          Voluptas!
        </p>
        <div className="flex justify-between pt-2 items-center">
          <span className="text-xl">$20</span>
          <button>
            <IoIosAddCircleOutline size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
