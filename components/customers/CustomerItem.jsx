import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="text-white mt-5">
      <div className="p-6 bg-secondary rounded-md ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur
          nesciunt eaque minus quisquam.
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-japanfont">Moana Michell</span>
          <span className="text-sm">magna aliqua</span>
        </div>
      </div>
      <div
        className="relative w-28 h-28 border-4 rounded-full border-third mt-4 before:content-[''] before:absolute before:top-1 
        flex justify-center before:-translate-y-4 before:rotate-45 before:w-5 before:h-5 before:bg-third"
      >
        <Image
          src={imgSrc}
          alt="client"
          fill
          className="object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
