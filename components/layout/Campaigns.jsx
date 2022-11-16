import Image from "next/image";
import Title from "../ui/Title";
import { CiShoppingCart } from "react-icons/ci";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex flex-1 rounded-md py-5 px-4 items-center gap-x-4">
      <div className="relative sm:w-40 sm:h-40 w-36 h-36 after:content-['']  border-[3px] border-black rounded-full overflow-hidden">
        <Image
          src="/images/ramen.png"
          alt=""
          fill
          className="hover:scale-125 transition-all"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Freitags Ramen Tage</Title>
        <div className="font-boldfont my-2">
          <span className="text-4xl">20% </span>
          <span>Rabatt</span>
        </div>
        <button className="flex items-center gap-x-2 bg-third border-[2px] rounded-lg text-black py-1 px-3">
          Bestell Jetzt
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
