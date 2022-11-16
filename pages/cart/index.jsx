import Image from "next/image";
import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Title from "../../components/ui/Title";

const Cart = () => {
  return (
    <div className="bg-primary">
      <Title addClass="text-center text-5xl font-japanfont">My Basket</Title>
      <div className="container mx-auto flex flex-wrap justify-evenly gap-20 sm:min-h-[calc(100vh_-_88px)]">
        <div className="rounded-lg bg-secondary h-fit p-10 my-10">
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-x-5 bg-[#CCF381] rounded-md p-5">
              <div className="flex">
                <Image
                  src="/images/ramen1.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <span className="text-xl">Tokyo Ramen</span>
                  <span className="text-sm">
                    Mit extra ketcup, mayones, scharf
                  </span>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="flex items-center justify-center text-xl">
                    20$
                  </span>
                  <div className="flex items-center gap-x-1">
                    <CiCircleMinus size={30} />
                    <span className="text-xl">1</span>
                    <CiCirclePlus size={30} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-5  bg-[#CCF381] rounded-md p-5">
              <div className="flex relative">
                <Image
                  src="/images/ramen1.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <span className="text-xl">Tokyo Ramen</span>
                  <span className="text-sm">
                    Mit extra ketcup, mayones, scharf
                  </span>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="flex items-center justify-center text-xl">
                    20$
                  </span>
                  <div className="flex items-center gap-x-1">
                    <CiCircleMinus size={30} />
                    <span className="text-xl">1</span>
                    <CiCirclePlus size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-[#4831D4]  h-fit p-10 my-10">
          <div className="bg-[#CCF381] min-h-[calc(100vh_-_433px)] flex flex-col justify-center p-12 md:w-auto w-full rounded-lg  md:text-start !text-center">
            <Title addClass="text-[40px]">CART TOTAL</Title>

            <div className="mt-6 flex flex-col">
              <span>Discount: 0.00$</span>
              <span>Total: 20$</span>
            </div>

            <div>
              <button className="btn-primary mt-4 md:w-auto w-52">
                CHECKOUT NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
