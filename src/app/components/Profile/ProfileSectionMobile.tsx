import Image from "next/image";
import Text from "@/app/components/utitles/text";
import StatsSection from "../utitles/StateSection";
import FollowButton from "./FollowButton";

export default function ProfileSectionMobile() {
  return (
    <div className="sm:hidden flex flex-col bg-white rounded-lg m-4 p-3">
      <Image
        src="/profilePhoto.svg"
        alt="Profile Photo"
        width={50}
        height={70}
      />
      <div className="mt-2">
        <Text
          weight="700"
          size="18px"
          lineHeight="23px"
          color="#333333"
          text="Hala Ahmed"
        />
        <div className="mt-1">
          <Text
            weight="400"
            size="14px"
            color="#4F4F4F"
            text="I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Makeup and Skin Care."
          />
        </div>
      </div>
      <div className="mt-2.5">
        <StatsSection />
        <FollowButton />
      </div>
    </div>
  );
}
