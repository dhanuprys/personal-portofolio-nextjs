import Inspire from "@/common/Inspire";
import ShortDescription from "@/common/ShortDescription";
import Socials from "@/common/Socials";
import Terminal from "@/common/Terminal";
import WorkHistory from "@/common/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-[70rem] mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
      <div className="py-10 lg:py-24 px-6 lg:px-0 lg:sticky lg:top-0 mb-20 lg:mb-0 lg:max-h-screen lg:flex lg:flex-col lg:items-center">
        {/* ABOUT ME */}
        <div className="flex flex-col lg:items-center h-full gap-4">
          <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full">
          <Image className="rounded-full w-[200px] h-[200px] hover:scale-110 transition-all" alt="photo" src="/me.jpg" width={300} height={300} />
          </div>
          <h1 className="text-5xl font-bold">Dhanu Purnayasa</h1>
          <span className="text-2xl font-semibold">Full Stack Developer</span>
          <p className="text-lg lg:max-w-[70%] lg:text-center">
            I built something new that impressed everyone
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

        {/* WEB PAGE INSPIRATION */}
        <Inspire />
      </div>
    </div>
  );
}
