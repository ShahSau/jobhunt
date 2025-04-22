import React from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";

const PostJobButton = ({ theme }: { theme: string }) => {
  return (
    <section className="grid place-content-center md:py-1 md:px-2  my-4">
      <button
        title="Post a job"
        className={`hidden md:flex group  h-10 items-center gap-2 rounded-full pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-zinc-600 hover:pl-2 hover:text-white active:bg-neutral-700 ${
          theme === "light" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <span
          className={`rounded-full p-1 text-sm transition-colors duration-300 group-hover:bg-white ${
            theme === "light" ? "bg-white" : "bg-black"
          }`}
        >
          <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
        </span>
        <span>Post a Job</span>
      </button>
      <button
        title="Post a job"
        className="md:hidden rounded-md text-lg text-black transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 px-1 py-0"
      >
        <FiPlus className="text-3xl" />
      </button>
    </section>
  );
};

export default PostJobButton;
