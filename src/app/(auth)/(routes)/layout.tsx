import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" flex justify-center items-center h-screen">
      {children}
    </section>
  );
};

export default AuthLayout;
