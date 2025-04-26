import React from "react";
import Card from "../components/Card";
import { ShieldUser, University } from "lucide-react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmM5poQRHvAEcev7ftX4yjrzsVuRlOebf0PA&s')] bg-no-repeat bg-[length:100%_100%] md:bg-cover bg-center md:bg-fixed overflow-scroll">
      <div className="min-h-full w-full z-50 bg-black/50">
        <div className="pt-5 flex flex-col justify-center items-center gap-3">
        <img
            className="h-20"
            src="https://static.vecteezy.com/system/resources/thumbnails/012/377/764/small/graduation-line-icon-png.png"
            alt="igit-logo"
          />
          <h1 className="text-slate-200 text-xl">Welcome</h1>
          <span className="text-slate-200 text-2xl font-bold text-center p-4">
            X Y Z University
          </span>
          <a
            className="bg-[#135106] border-[#135106] border-2 px-3 py-1 text-sm text-emerald-100 rounded-lg hover:bg-transparent hover:text-white hover:border-white hover:border-2 hover:transform hover:transition hover:duration-300"
            href="https://www.igdtuw.ac.in/"
          >
            Visit official site
          </a>
        </div>
        <div className="flex items-center justify-center gap-10 p-6 flex-wrap mt-5">
          {/* <Card
            user="student"
            desc="Stay connected with your academics, track attendance, and access essential resources"
          /> */}
          <Card
            user="lms"
            desc="Explore a centralized hub for learning materials, lectures, and assessments"
          />
          <Card
            user="faculty"
            desc="Manage academic activities, monitor student progress, and streamline coursework"
          />
        </div>
        <div className="relative flex justify-end items-center ">
          <Link className="bg-slate-300/70 p-3 flex justify-center items-center mt-4 mr-8 mb-4 right-0 rounded-full hover:scale-120 hover:transform hover:transition hover:duration-300 cursor-pointer" to="/admin-login">
            <ShieldUser size={30}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
