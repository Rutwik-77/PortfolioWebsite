/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/**
 * @format
 */

import { Timeline } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperianceInfo } from "../User";
import { ReactNode } from "react";

// Define the type for the timeline item
type ExperienceItem = {
  [x: string]: ReactNode;
  role: string;
  Company: string;
};
const TimelineItem = ({ items }: { items: ExperienceItem[] }) => {
  return (
    <>
      {items.map((item, index) => (
        <Timeline.Item
          data-aos="fade-up" data-aos-duration="800"
          key={index}
          className=''
          bullet={<IconBriefcaseFilled className='!text-bgColor' size={20} />}
        >
          <div className='border border-greencolor p-5 rounded-2xl !shadow-[0_0_10px_1px_#185bc6] '>
            <div className='text-textcolor flex flex-col gap-2 items-center'>
              <div className='font-bold text-greencolor text-3xl'>
                {item.role}
              </div>
              <div className=' text-lg  font-semibold   text-gray-500'>
                {item.Company} &#x2022; <span>{item.date}</span>{" "}
              </div>

              <p className='mt-2'>{item.description}</p>
              <div className='mt-2 flex items-center flex-wrap gap-2'>
                <span className='font-semibold whitespace-nowrap'>Skills:</span>
                <div className='flex  flex-wrap gap-1'>
                  {Array.isArray(item.skills) && item.skills.map((skill: any, i: number) => (
                    <span
                      key={i}
                      className='bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-lg'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Timeline.Item>
      ))}
    </>
  );
};

const Experience = () => {
  return (
    <div className='md:px-20 px-10  font-mono my-32 '>
      <h1 className='text-4xl text-center font-bold mt-11 md:mt-0 !text-greencolor mb-5'>
        Experience
      </h1>
      <Timeline color='#5bf960' active={5} bulletSize={30} lineWidth={2}>
        <TimelineItem items={ExperianceInfo} />
      </Timeline>
    </div>
  );
};

export default Experience;
