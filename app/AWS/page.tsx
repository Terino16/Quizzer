import Link from "next/link";
import React from "react";

const page = () => {
  return (
      <div className="p-3 relative text-white m-12 border-stone-300 border-[1px] rounded-xl w-[300px] h-[200px]">
      <div className="flex-col items-center justify-between text-xl font-bold">
        <h1 className="">AWS CLF-02 Exam</h1>
        <p>65 Questions</p>
        <p>100 Mins</p>
      </div>
      <div className="absolute bottom-4">
      <Link href="AWS/1" className=" p-2 rounded-lg text-xl bg-slate-400">
       Attempt
      </Link> 
      </div>
      </div> 
   
  );
};

export default page;
