import React from "react";

const OrderButton = () => {
  return (
    <div>
      <div>
        <button
          className="relative ml-5 bg-secondary text-3xl p-[13px] border-double border-4 border-secondary rounded-md after:bg-white after:w-full after:-z-10 after:absolute after:h-full after:top-0 after:rounded-md
        after:left-[-10px] hover:bg-primary transition-all"
        >
          <p className="font-boldfont font-extrabold text-white">
            BESTELL JETZT
          </p>
        </button>
      </div>
    </div>
  );
};

export default OrderButton;
