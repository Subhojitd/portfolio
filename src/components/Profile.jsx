import React from "react";
import Pic from "../assets/pic.jpg";
import { Github, Linkedin, Twitter } from "lucide-react";

const Profile = () => {
  return (
    <>
      <div className=" w-full h-full flex flex-col gap-3 items-center justify-center">
        <img
          className="w-28 h-28 rounded-full object-cover border-2 border-slate-200 p-2"
          src={Pic}
          alt=""
        />
        <h1 className="font-nameFont tracking-widest text-xl">{`< Subhajit.dev />`}</h1>

        <div className="w-[80%] h-8 flex gap-3 items-center justify-center ">
          <div className="flex items-center justify-center hover:bg-slate-700 cursor-pointer w-9 h-9 rounded-full  ">
            <a href="">
              <Twitter color="#007dfa" />
            </a>
          </div>
          <div className="flex items-center justify-center hover:bg-slate-700  cursor-pointer w-9 h-9 rounded-full  ">
            <a
              href="https://www.linkedin.com/in/subhajit-das-152907244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="#0011ff" />
            </a>
          </div>
          <div className="flex items-center justify-center hover:bg-slate-700 cursor-pointer w-9 h-9 rounded-full  ">
            <a href="">
              <Github color="#00fa32" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
