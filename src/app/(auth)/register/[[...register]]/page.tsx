import { SignUp } from "@clerk/nextjs";
import React from "react";

const RegisterPage = () => {
  return <SignUp forceRedirectUrl={"/dashboard"} />;
};

export default RegisterPage;
