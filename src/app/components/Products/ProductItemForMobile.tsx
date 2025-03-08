"use client";

import Image from "next/image";

interface ProductItemForMobileProps {
  imageSrc: string;
  tagName: string;
  tagBgColor: string;
  description: string;
  price: string;
  timeLeft: { days: number; hours: number; minutes: number };
  initialLiked: boolean;
}

const ProductItemForMobile: React.FC<ProductItemForMobileProps> = ({
  imageSrc,
  tagName,
  tagBgColor,
  description,
  price,
  timeLeft,
  initialLiked,
}) => {

  return (
    <div className="flex flex-row gap-3 h-[88px]   ">
      <div className="relative  ">
        {/* Product Image */}
        <Image
          src={imageSrc}
          width={125}
          height={100}
          alt="product"
          className="rounded-lg h-[88px]"
        />

        <span className="absolute p-1 bg-white rounded-full top-1 left-1 m-1">
          <Image src={"/notLiked.svg"} alt="like" width={10} height={10} />
        </span>
        {/* Tag */}
        <span
          className="absolute bottom-0 right-0 rounded-tl-[30px] rounded-br-[10px] text-white text-[6px] px-4  flex items-center justify-center w-[70px] h-5"
          style={{ backgroundColor: tagBgColor }}
        >
          {tagName}
        </span>
      </div>
      <div className="flex flex-col ">
        <p className="text-[#333333] text-[12px] flex-wrap font-normal">
          {description}
        </p>

        <div className="flex flex-row gap-2">
          <p className="text-[#828282] font-normal">Starting price</p>
          <p className="text-[#333333] text-[12px] font-bold">{price}</p>
        </div>

        <div className="flex flex-row gap-2">
          <p className="text-[#828282] text-[12px] font-normal">
            Lot starts in
          </p>
        </div>
        <div className="flex flex-row mt-1">
          <div className="bg-[#FFF5E9] px-2 py-1  flex justify-center items-center rounded-2xl">
            <p className="text-[#FF951D] text-[11px] font-bold">
              {timeLeft.days} days
            </p>
          </div>
          <div className="bg-[#FFF5E9] px-2 py-1  flex justify-center items-center rounded-2xl">
            <p className="text-[#FF951D] text-[11px] font-bold">
              {timeLeft.hours} hours
            </p>
          </div>
          <div className="bg-[#FFF5E9] px-2  flex justify-center items-center rounded-2xl">
            <p className="text-[#FF951D] text-[11px] font-bold">
              {timeLeft.minutes} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemForMobile;
