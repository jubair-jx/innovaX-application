import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" h-full relative">
      <div className=" hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[90] bg-gray-900">
        <h1 className=" font-semibold mt-2 text-4xl text-gray-100 font-mono text-center">
          InnovaX
        </h1>
      </div>
      <main className=" md:pl-80">
        <Navbar />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
