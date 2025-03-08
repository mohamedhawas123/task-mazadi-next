import StatBox from "./StatBox";

const StatsSection: React.FC = () => {
  return (
    <div className="flex flex-row justify-between gap-x-2">
      <StatBox iconSrc="/user-tick.svg" value={5} label="Following" />
      <StatBox iconSrc="/profile-2user.svg" value={5} label="Followers" />
      <StatBox iconSrc="/magic-star.svg" value={4.2} label="Rate" />
    </div>
  );
};

export default StatsSection;
