import Image from "next/image";
import Text from "@/app/components/utitles/text";

interface StatBoxProps {
  iconSrc: string;
  value: string | number;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ iconSrc, value, label }) => {
  return (
    <div className="w-32 p-2 bg-[#FFF5E9] flex  flex-row gap-2 rounded-2xl items-center justify-center ">
      <Image src={iconSrc} alt={label} width={30} height={40} />
      <div className="flex flex-col flex-wrap ">
        <Text text={value.toString()} color="black" weight="700" size="12px" />
        <Text text={label} color="#FF951D" size="12px" />
      </div>
    </div>
  );
};

export default StatBox;
