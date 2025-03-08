import Image from "next/image";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import Text from "@/app/components/utitles/text";
import StatsSection from "./components/utitles/StateSection";
import ProfileSectionMobile from "./components/Profile/ProfileSectionMobile";
import QrCodeSectionMobile from "./components/Profile/QrCodeSectionMobile";
import FollowButton from "./components/Profile/FollowButton";
import ProfileSectionDesktop from "./components/Profile/ProfileSectionDesktop";
import CategoryButton from "./components/utitles/CategoryButton";
import ProductItem from "./components/Products/ProductItem";
import ProductSectionDesktop from "./components/Products/ProductSectionDesktop";
import ProductListForMobile from "./components/Products/ProductListForMobile";

export default function Home() {
  return (
    <div className="bg-[#F6F4F5] h-full">
      
      <div className="fixed top-0 left-0 w-full z-50 bg-white ">
        <MobileNavbar />
        <DesktopNavbar />
      </div>

      <div className="pt-[80px]">
        {/* Profile section for mobile */}
        <ProfileSectionMobile />
        <QrCodeSectionMobile />
      </div>

      {/* Profile section for desktop and Product */}
      <div className="hidden sm:flex flex-row  ml-9">
        <ProfileSectionDesktop />

        <ProductSectionDesktop />
      </div>

      {/* Product section for Mobile */}
      <div className="sm:hidden flex-wrap flex-col bg-white rounded-lg mx-4      ">
      
        <div className="flex space-x-4 py-1  justify-center mt-3 ">
          {["Products", "Articles", "Reviews"].map((category, index) => (
            <div className="mt-3" >
              <CategoryButton
              key={index}
              text={category}
              defaultSelected={category === "Products"}
            />
              </div>
          ))}
        </div>
        {/* Product Title */}
        <div className="mt-6 mx-3 flex flex-row gap-3">
          <Text text="Products" color="black" size="24px" weight="700" />
          <Text text="( 12 )" color="#828282" size="14px" weight="400" />
        </div>
        <ProductListForMobile />
        <div className="h-10"></div>
      </div>
    </div>
  );
}
