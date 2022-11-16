import Carousel from "../components/ui/Carousel";
import Campaigns from "../components/layout/Campaigns";
import MenuWrapper from "../components/product/MenuWrapper";
import Reservation from "../components/layout/Reservation";
import React from "react";
import Customers from "../components/customers/Customers";

export default function Index() {
  return (
    <div className="bg-primary">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <Customers />
    </div>
  );
}
