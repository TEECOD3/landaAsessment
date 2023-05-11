import { FC } from "react";
interface StatusProps {}

const Status: FC<StatusProps> = () => {
  return (
    <>
      <div className="bg-orange-100 rounded-lg py-2 px-4 w-[5rem] md:w-[6rem] flex item-center justify-center text-sm">
        <h3 className="text-orange-200">ongoing</h3>
      </div>
    </>
  );
};

export default Status;
