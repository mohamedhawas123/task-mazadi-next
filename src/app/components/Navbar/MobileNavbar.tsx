import Image from "next/image";
import React from "react";

const MobileNavbar: React.FC = () => {
  const icons: string[] = [
    "/search-normal.svg",
    "/notification.svg",
    "/profile.svg",
  ];

  return (
    <div className="sm:hidden flex justify-between bg-white mt-3 py-3 px-3">
      <div className="flex gap-2 items-center">
        <Image
          src="/menu.svg"
          alt="menu"
          width={25}
          height={25}
          className="mt-2.5"
        />
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
      </div>
      <div className="flex gap-2 items-center">
        {icons.map((src, index) => (
          <Image key={index} src={src} alt="icon" width={25} height={25} />
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
