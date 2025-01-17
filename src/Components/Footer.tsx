

/** @format */

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Info } from "../User";

const Footer = () => {
  return (
    <div className="font-mono w-full container mx-auto mt-20 mb-10 text-center">
      {/* Footer Name */}
      <div className="text-greencolor text-3xl font-bold mb-2">{Info.name}</div>

      {/* Footer Copyright */}
      <div className="text-textcolor md:text-xl text-sm">
        Copyright &copy; {new Date().getFullYear()} {Info.name} | All Rights
        Reserved
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-5 gap-6">
        <a
          href="https://github.com/Rutwik-77"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textcolor hover:text-greencolor transition transform duration-300 ease-in-out"
        >
          <IconBrandGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/rutwiksawarkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-textcolor hover:text-greencolor transition transform duration-300 ease-in-out"
        >
          <IconBrandLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
