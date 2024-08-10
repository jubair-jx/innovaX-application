"use client";

import { cn } from "@/lib/utils";
import {
  Code2Icon,
  HomeIcon,
  Image,
  LayoutDashboardIcon,
  MessageCircle,
  MusicIcon,
  Settings2,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const sideBarData = [
  {
    lable: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    lable: "Video Generation",
    icon: VideoIcon,
    href: "/video-generation",
    color: "text-red-500",
  },
  {
    lable: "Music Generation",
    icon: MusicIcon,
    href: "/audio-generation",
    color: "text-orange-500",
  },
  {
    lable: "Conversional",
    icon: MessageCircle,
    href: "/conversation-generation",
    color: "text-violet-500",
  },
  {
    lable: "Code Generation",
    icon: Code2Icon,
    href: "/code-generation",
    color: "text-purple-500",
  },
  {
    lable: "Image Generation",
    icon: Image,
    href: "/image-generation",
    color: "text-cyan-500",
  },
];
const OthersData = [
  {
    lable: "Home",
    icon: HomeIcon,
    href: "/",
    color: "text-indigo-500",
  },
  {
    lable: "Settings",
    icon: Settings2,
    href: "/settings",
    color: "text-fuchsia-500",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=" space-y-6 p-3 flex flex-col ">
      <div className="  px-3 py-1 flex-1">
        <Link href={"/"}>
          <h1 className="  font-semibold  text-4xl text-gray-100 font-mono text-center">
            InnovaX
          </h1>
        </Link>
      </div>
      <hr className="h-px bg-gray-500 border-0 " />

      <div className=" space-y-2">
        {sideBarData.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-base flex  p-3 w-full justify-start font-medium cursor-pointer bg-white/10 text-white hover:text-white hover:bg-white/25 rounded-lg transition",
              pathname === route.href
                ? "bg-white/25 text-gray-200"
                : "bg-white/10 text-gray-100"
            )}
          >
            <div className=" flex items-center flex-1">
              <route.icon className={cn("h-6 w-6 mr-3", route.color)} />

              {route.lable}
            </div>
          </Link>
        ))}
      </div>
      <hr className="h-px bg-gray-500 border-0 " />
      <div className=" space-y-2">
        {OthersData.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-base flex  p-3 w-full justify-start font-medium cursor-pointer bg-white/10 text-white hover:text-white hover:bg-white/25 rounded-lg transition"
          >
            <div className=" flex items-center flex-1">
              <route.icon className={cn("h-6 w-6 mr-3", route.color)} />

              {route.lable}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
