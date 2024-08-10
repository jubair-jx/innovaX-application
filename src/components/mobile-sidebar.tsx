"use client";

import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";

import dynamic from "next/dynamic";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const Button = dynamic(() => import("./ui/button"), { ssr: false });

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className=" md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-gray-950">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
