import {
  ChevronRight,
  FileCheck,
  HardDriveDownload,
  Laptop2,
  Mail,
} from "lucide-react";
import Resume from "../assets/resume.pdf";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full p-5 flex gap-5 items-center justify-center flex-col">
      {/* Intro */}
      <div>
        <h1 className=" flex gap-2  items-center justify-center font-nameFont text-[18px] w-full tracking-wider  ">
          Full Stack Developer <Laptop2 color="#6281fe" />
        </h1>
        <p className="text-sm font-light mt-2 text-slate-300 text-center">
          {""} Passionate about perfecting the frontend landscape🎨✨. Crafting
          delightful user journeys 🚀 and bringing visions to life 🌍.
        </p>
      </div>

      {/* Contact */}

      <div className="w-full flex flex-col gap-4">
        <a
          href="mailto:subhojitdas153@gmail.com"
          className="w-full h-10 bg-slate-800 px-2 rounded-sm flex items-center justify-between cursor-pointer hover:bg-slate-700 "
        >
          <Mail color="#6281fe" /> Mail me <ChevronRight color="#6281fe" />
        </a>
        <a
          href={Resume}
          download
          className="w-full h-10 bg-slate-800 px-2 rounded-sm flex items-center justify-between cursor-pointer hover:bg-slate-700"
        >
          <FileCheck color="#6281fe" /> Resume{" "}
          <HardDriveDownload color="#6281fe" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
