
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function Header() {
  

   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   }
const navClassName = `bg-[#3b3054] md:bg-transparent w-[80%] py-8 flex-col md:flex items-center justify-center md:justify-between z-40 transition-all duration-300 ease-in-out md:flex-row ${
  isOpen ? 'block' : 'hidden'
}`;
  
  return (
    <>
      
         <header className=" text-white md:text-gray flex p-4 flex-col md:flex-row  gap-y-4 md:gap-x-8 justify-around md:justify items-center ">
              <img src="/images/logo.svg" alt="logo" className="self-start md:self-center" />
              <FontAwesomeIcon icon={faBars} className="text-gray  absolute top-0 right-5 top-5 w-12 block md:invisible" onClick={toggleMenu} />

              <nav className={` ${navClassName}  `}>
              <ul className=" flex flex-col md:flex-row gap-y-8 mb-4 md:mb-0 md:gap-x-4   items-center py-2 border-b-1 md:border-b-0 ">
                <li className="hover:text-[#3b3054]">Featuring</li>
                <li className="hover:text-[#3b3054]">Pricing</li>
                <li className="hover:text-[#3b3054]">Resources</li>
              </ul>
              <div className=" flex flex-col md:flex-row items-center gap-y-4 md:gap-x-4">
                <button className="hover:text-[#3b3054]">Login</button>
                <button className="text-white bg-[#2acfcf] px-4 py-1 rounded-2xl w-3/4 hover:bg-[#3b3054]">Signup</button>
              </div>
              </nav>
            </header>
    </>
  );
}