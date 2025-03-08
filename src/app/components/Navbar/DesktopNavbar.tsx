import Image from "next/image";
import React from "react";

const DesktopNavbar: React.FC = () => {
  const menuItems: string[] = ["Home", "Blog", "Gift"];
  const icons: string[] = [
    "/search-normal.svg",
    "/notification.svg",
    "/profile.svg",
  ];

  return (
    <div className="hidden sm:flex items-center px-14 py-3 bg-white justify-between">
      <div className="flex gap-7">
        <Image src="/bgLogo.svg" alt="logo" width={80} height={30} />
        <div className="flex gap-10 mt-1">
          {menuItems.map((item, index) => (
            <div key={index} className="relative cursor-pointer ">
              <p
                className={`font-[var(--font-nunito)] text-[18px] leading-[23px] ${
                  item === "Home" ? "text-[#D20653]" : "text-[#828282]"
                }`}
              >
                {item}
              </p>
              {item === "Home" && (
                <div className="absolute top-10 bg-[#D20653] h-2 w-11 rounded-t-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 mt-1 items-center">
        <div className="flex gap-4 items-center">
          {icons.map((src, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={src}
                alt="icon"
                width={src === "/profile.svg" ? 35 : 25}
                height={src === "/profile.svg" ? 35 : 25}
              />
              {index < icons.length - 1 && (
                <div className="h-6 w-[2px] bg-[#FFEAD2]"></div>
              )}
            </div>
          ))}
        </div>
        <div className="px-10 cursor-pointer rounded-2xl py-2.5 bg-gradient-to-r from-[#D20653] to-[#FF951D] flex flex-row items-center gap-3">
          <Image src="/plus.svg" alt="icon" width={25} height={25} />
          <p className="font-[var(--font-nunito)] text-[14px] text-white leading-[23px]">
            Add new product
          </p>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer">
          <Image src="/global.svg" alt="icon" width={25} height={25} />
          <div className="h-6 w-[2px] bg-[#E0E0E0]"></div>
          <p>EN</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
