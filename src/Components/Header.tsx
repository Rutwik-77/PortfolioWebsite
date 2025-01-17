/* eslint-disable react-refresh/only-export-components */
/** @format */

import { IconHexagonLetterR } from "@tabler/icons-react";
import Sidebar from "./Sidebar";


const Links =[ "About", "Skills", "Projects", "Contact" ];
const navlinks = () =>{
  return(
    Links.map((link, index) => (
      <a href={`#${link}`} key={index} className="text-textcolor hover:text-greencolor transition duration-300">
        {link}
      </a>
    ))
  )
}
const Header = () => {  return (
    <nav className="flex bg-bgColor w-full mx-auto font-mono justify-between items-center py-5 px-8">
      <IconHexagonLetterR className="
      !z-30" size={48}  color="#5bf960" stroke={1.25}/>
      <div className=" md:flex hidden space-x-8 text-xl">
        {
          navlinks()
          
        }
      </div>
      
        <Sidebar></Sidebar>
     
    </nav>
  )
};

export default Header;
export {navlinks};

