import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 dark:bg-gray-900">
      <p className="text-center">
        © {new Date().getFullYear()} - Click-n-Meet
      </p>
    </footer>
  );
};

export default Footer;
