import Image from "next/image";
import Text from "@/app/components/utitles/text";
import StatsSection from "../utitles/StateSection";
import FollowButton from "./FollowButton";

export default function ProfileSectionDesktop() {
  return (
    <div className="flex flex-col items-center w-1/3">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl m-4 p-4 flex flex-col w-full">
        <Image
          src="/profilePhoto.svg"
          alt="Profile Photo"
          width={100}
          height={100}
        />
        <div className="mt-2 items-start">
          <Text
            weight="700"
            size="18px"
            lineHeight="23px"
            color="#333333"
            text="Hala Ahmed"
          />
          <Text
            weight="400"
            size="14px"
            color="#4F4F4F"
            text="I am Hala Ahmed, the owner of the local brand Beauty for Makeup and Skin Care."
          />
        </div>
        <div className="my-2 w-full">
          <StatsSection />
          <FollowButton />
        </div>
      </div>

      {/* QR Code Card */}
      <div className="bg-white rounded-lg m-4 p-4 w-full">
        <div className="flex justify-between items-center px-3 py-2">
          <Text text="QR Code" color="black" weight="700" size="18px" />
          <div className="flex gap-4 cursor-pointer">
            {["eye", "send-square", "document-download"].map((icon) => (
              <Image
                key={icon}
                src={`/${icon}.svg`}
                alt={icon}
                width={22}
                height={10}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 bg-[#FFF5E9] rounded-2xl p-3">
            <Image
              src="/document-download-yollow.svg"
              alt="download-icon"
              width={22}
              height={10}
            />
            <Text
              text="Download the QR code or share it with your friends."
              color="#333333"
              weight="400"
            />
          </div>

          <div className="bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-2xl mt-4 p-4 flex justify-center">
            <div className="bg-white rounded-2xl flex flex-col items-center w-full py-4">
              <Image
                src="/bgLogo.svg"
                alt="logo"
                width={110}
                height={30}
                className="mt-2"
              />
              <div className="mt-1">
                <Text
                  weight="700"
                  size="18px"
                  lineHeight="23px"
                  color="#333333"
                  text="Hala Ahmed"
                />
              </div>
              <Image
                src="/qr.svg"
                alt="QR Code"
                width={100}
                height={30}
                className="mt-3"
              />
              <Text
                weight="400"
                size="13px"
                lineHeight="23px"
                color="#333333"
                text="Follow Us on Mazaady"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
