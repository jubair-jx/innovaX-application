"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className=" space-y-4 h-full flex flex-col ">
      <div className=" px-3 py-1 flex-1">
        <Link href={"/"}>
          <h1 className=" font-semibold mt-2 text-4xl text-gray-100 font-mono text-center">
            InnovaX
          </h1>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
