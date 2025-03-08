import Text from "@/app/components/utitles/text";

export default function FollowButton() {
  return (
    <button className="rounded-2xl cursor-pointer py-2.5 bg-gradient-to-r from-[#D20653] to-[#FF951D] flex items-center justify-center mt-3.5 w-full">
      <Text text="Follow" color="white" weight="700" />
    </button>
  );
}
