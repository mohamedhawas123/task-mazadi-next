"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductItemProps {
  imageSrc: string;
  tagName: string;
  tagBgColor: string;
  description: string;
  price: string;
  timeLeft: { days: number; hours: number; minutes: number };
  initialLiked: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  tagName,
  tagBgColor,
  description,
  price,
  timeLeft,
  initialLiked,
}) => {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <div className="flex flex-row gap-3  ">
      <div className="relative">
        {/* Product Image */}
        <Image
          src={imageSrc}
          width={150}
          height={100}
          alt="product"
          className="rounded-lg flex-shrink-0"
        />
        {/* Tag */}
        <span
          className="absolute bottom-0 right-0 rounded-tl-[35px] rounded-br-[35px] text-white text-xs px-4 py-2 flex items-center justify-center w-fit min-w-[80px] h-7 whitespace-nowrap flex-shrink-0"
          style={{ backgroundColor: tagBgColor }}
        >
          {tagName}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#333333] text-[18px] font-normal">{description}</p>

        <div className="flex flex-row gap-2  items-center">
          <p className="text-[#828282] font-normal">Starting price</p>
          <p className="text-[#333333] text-[23.66px] font-bold">{price}</p>
        </div>

        <div className="flex flex-row gap-2">
          <p className="text-[#828282] font-normal">Lot starts in</p>
          <div className="bg-[#FFF5E9] px-3 py-0.5 flex justify-center items-center rounded-2xl">
            <p className="text-[#FF951D] font-bold">{timeLeft.days} days</p>
          </div>
          <div className="bg-[#FFF5E9] px-3 py-0.5 flex justify-center items-center rounded-2xl">
            <p className="text-[#FF951D] font-bold">{timeLeft.hours} hours</p>
          </div>
          <div className="bg-[#FFF5E9] px-3 py-0.5 flex justify-center items-center rounded-2xl">
            <p className="text-[#FF951D] font-bold">
              {timeLeft.minutes} minutes
            </p>
          </div>
        </div>
      </div>

      {/* Like Button */}
      <div className="mx-auto cursor-pointer" onClick={() => setLiked(!liked)}>
        <Image
          src={liked ? "/liked.svg" : "/notLiked.svg"}
          alt="like"
          width={liked ? 50 : 25}
          height={liked ? 50 : 25}
        />
      </div>
    </div>
  );
};

export default ProductItem;
