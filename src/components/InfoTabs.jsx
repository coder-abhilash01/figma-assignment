import React, { useState, useRef, useEffect } from "react";
import { CircleQuestionMark } from "lucide-react";
import './infoScrollbar.css';


const InfoTabs = () => {
  const tabs = ["About Me", "Experience", "Recommended"];
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="flex flex-1 p-2 bg-[#363c43] shadow-lg shadow-black/30 border border-gray-900/30 rounded-xl">
      {/* Sidebar icons */}
      <div className="flex flex-col gap-15 py-5 items-center">
        <CircleQuestionMark className="text-[#6d7278] w-5.5 lg:w-7" />
        <svg
          width="20"
          height="28"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          <rect
            x="10.6879"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            y="10.6878"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            x="10.6879"
            y="10.6878"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            y="21.3757"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
          <rect
            x="10.6879"
            y="21.3757"
            width="9.31217"
            height="9.31217"
            rx="1.16402"
            fill="#4A4E54"
          />
        </svg>
      </div>

      {/* Tabs + Content */}
      <div className="flex flex-col w-full items-center px-0 md:px-1">
        {/* Tabs */}
        <nav className="relative w-full xl:w-[90%] bg-[#141414] rounded-2xl lg:py-2 py-1 flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 z-10 py-2 text-[12px] md:text-[10px] lg:text-[15px] xl:text-lg transition-all duration-500 cursor-pointer ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white rounded-full before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-linear-to-r before:from-[#777]/10 before:to-[#878787]/10 before:rounded-full before:transition-all before:duration-500 hover:before:w-full"
              }`}
            >
              {tab}
            </button>
          ))}

          {/* Animated background */}
          <div
            className={`absolute top-2 bottom-2 rounded-xl bg-linear-to-r from-[#272626] to-[#333232] transition-all duration-500 ease-in-out shadow-xl shadow-black`}
            style={{
              left:
                activeTab === "About Me"
                  ? "2%"
                  : activeTab === "Experience"
                  ? "34%"
                  : "68%",
              width: "30%",
            }}
          ></div>
        </nav>

        {/* Text Content */}
        <div className="yes flex-1 text-white/40 px-4 md:px-2 lg:px-5 sm:text-[13px] md:text-[12px] lg:text-[16px] xl:text-lg flex flex-col gap-4 mt-4 font-light leading-6 overflow-hidden overflow-y-auto max-h-[180px] xl:max-h-[180px] custom-scroll">
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>

          <p>
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years with my wife Tiffany and my 4-year-old
            twin daughters — Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9–10 AM. This is
            a...
          </p>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className=" h-16 p-[3px] lg:p-1  bg-linear-to-b from-[#ababac] to-[#393b3b] shadow shadow-black/40 rounded-2xl mt-24"></div>
    </div>
  );
};

export default InfoTabs;
