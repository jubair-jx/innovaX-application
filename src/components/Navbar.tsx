import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" flex items-center p-4">
      <Button variant={"ghost"} size={"icon"} className=" md:hidden">
        <MenuIcon />
      </Button>
      <div className=" flex justify-end w-full">
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
