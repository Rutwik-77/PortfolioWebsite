/** @format */

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Social = () => {
  return (
    <div className="flex gap-6 items-center fixed bottom-72 left-1 rotate-90 hidden lg:flex">
  <a
    href="https://github.com/Rutwik-77"
    className="text-textcolor font-mono text-lg flex gap-5 hover:text-greencolor hover:-translate-x-3 transition transform duration-300 ease-in-out"
  >
    <IconBrandGithub className="-rotate-90" />
  </a>
  <a
    href="https://www.linkedin.com/in/rutwiksawarkar/"
    className="text-textcolor font-mono text-lg flex gap-5 hover:text-greencolor hover:-translate-x-3 transition transform duration-300 ease-in-out"
  >
    <IconBrandLinkedin className="-rotate-90" />
  </a>
</div>

  );
};

export default Social;
