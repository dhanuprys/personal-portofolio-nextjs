import Inspire from "@/common/Inspire";
import Projects from "@/common/Projects";
import ShortDescription from "@/common/ShortDescription";
import Socials from "@/common/Socials";
import Terminal from "@/common/Terminal";
import WorkHistory from "@/common/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full sticky top-0 max-w-[70rem] mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
        {/* <div className="h-2 bg-gradient-to-br from-indigo-600 to-blue-800 fixed z-[55] top-0 left-0 w-full"></div> */}
        <div className="pt-10 lg:py-24 px-6 lg:px-0 lg:sticky lg:top-0 mb-20 lg:mb-0 lg:max-h-screen lg:flex lg:flex-col lg:items-center">
          {/* ABOUT ME */}
          <div className="flex flex-col lg:items-center h-full gap-4">
            <div className="relative w-[170px] h-[170px] max-w-[170px] max-h-[170px] overflow-hidden rounded-full">
              <Image className="absolute top-0 left-0 rounded-full w-[170px] h-[170px] hover:opacity-85 hover:scale-110 hover:transition-all transition-all" alt="photo" src="/me.jpg" width={300} height={300} />
              <Image className="absolute pointer-events-none top-0 left-0 rounded-full w-[170px] h-[170px] scale-110" alt="photo" src="/me-people.png" width={300} height={300} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold">Dhanu Purnayasa</h1>
            <span className="text-lg md:text-2xl font-semibold">Full Stack Developer</span>
            <p className="text-lg lg:max-w-[70%] lg:text-center">
              I built <span className="bg-yellow-500 px-1 text-slate-200 font-semibold">something new</span> that impressed everyone
            </p>
          </div>

          <div className="lg:mt-auto mt-4">
            <Socials />
          </div>
        </div>
        <div className="py-5 lg:py-24 px-6 lg:px-0 flex flex-col gap-20">
          {/* SHORT DESCRIPTION ABOUT ME */}
          <ShortDescription />

          <Terminal />

          {/* WORK HISTORY */}
          <WorkHistory />

          {/* PROJECT */}
          <Projects />

          {/* WEB PAGE INSPIRATION */}
          <Inspire />
        </div>
      </div>
    </>
  );
}
