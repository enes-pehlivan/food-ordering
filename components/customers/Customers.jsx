import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto">
      <Title addClass="text-[40px] font-boldfont text-center">
        Our Customer
      </Title>
      <div className="flex sm:flex-row flex-col gap-10">
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </div>
    </div>
  );
};

export default Customers;
