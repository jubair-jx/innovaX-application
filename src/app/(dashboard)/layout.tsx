import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" h-full relative">
      <div className=" hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[90] bg-gray-950">
        <Sidebar />
      </div>
      <main className=" md:pl-80">
        <Navbar />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
