/* eslint-disable @typescript-eslint/no-explicit-any */


const SkillsCard = (props: any) => {
  return (
    <div className="w-full border rounded-2xl  border-greencolor p-5 !shadow-[0_0_10px_1px_#185bc6]">
      <div className="text-3xl text-textcolor text-center font-bold">
        {props.title}
      </div>
      <div className="mt-4 text-lg text-textcolor flex flex-wrap gap-2  items-center justify-center">
        {props.skills.map((skill: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 rounded-md text-lg font-medium text-greencolor bg-primarycolor"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};


export default SkillsCard;
