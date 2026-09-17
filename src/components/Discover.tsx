"use client";
import { ArrowRight, Map } from "lucide-react";
import Link from "next/link";
export default function Discover() {
  const locations = [
    {
      name: "Everest Region",
      stories: "32 stories",
      image: "/everest_region.png",
    },
    {
      name: "Annapurna Region",
      stories: "28 stories",
      image: "/annapurna_region.png",
    },
    {
      name: "Langtang Region",
      stories: "16 stories",
      image: "/langtang_region.png",
    },
    {
      name: "Mustang Region",
      stories: "14 stories",
      image: "/everest_region.png",
    },
    {
      name: "Manaslu Region",
      stories: "12 stories",
      image: "/manaslu_region.png",
    },
    {
      name: "Dolpo",
      stories: "10 stories",
      image: "/dolpo.png",
    },
  ];
  return (
    <div className="w-[409px] h-[488px] rounded-[16px] bg-white p-[24px]">
      <div className="flex justify-between pb-[24px] items-end">
        <h2 className="font-liberation font-bold text-[20px]">
          Discover by Location
        </h2>
        <div className="flex text-[14px] text-[#6B7280] items-center gap-[4px]">
          <Link href="#" className="font-400 font-sans">
            View all
          </Link>
          <ArrowRight width={14} height={14} className="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[11.83px]">
        {locations.map((location) => (
          <div
            key={location.name}
            style={{
              backgroundImage: `url(${location.image})`,
            }}
            className="relative w-[173.67px] h-[96px] rounded-[8px] text-white pl-[8px]"
          >
            <div className="absolute inset-0 bg-black/40 rounded-[8px]" />
            <div className="absolute bottom-0 z-10 pb-[8px] flex flex-col gap-0 font-sans">
              <h2 className="font-bold text-[14px]">{location.name}</h2>
              <span className="text-[10px] font-thin">{location.stories}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full flex rounded-[12px] border border-[#15803D] text-[#15803D] py-[12px] justify-center mt-[24px] font-medium">
        <Map strokeWidth={2} size={24} className="pr-[4.99px]" />
        <span className="text-[16px] font-sans font-400">
          Explore All Regions
        </span>
      </button>
    </div>
  );
}
