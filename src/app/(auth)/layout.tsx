import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-1 items-center justify-center">
      {children}
    </section>
  );
};

export default AuthLayout;
