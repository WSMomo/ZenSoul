import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Bars2Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="md:p-3 p-5 bg-red-50 flex justify-between items-center sticky top-0">
      {/* LEFT / LOGO */}
      <div className="w-28">
        <img src={Logo} alt="logo" className="h-full w-full" />
      </div>
      {/* RIGHT / MENU */}
      <button onClick={handleClick}>
        <Bars2Icon className="h-10 w-10" />
      </button>

      {/* NAVBAR MODAL */}
      {isOpen && (
        <div className="fixed w-4/6 bg-blue-500 top-0 bottom-0 right-0 flex items-center justify-center">
          <button className="fixed right-10 top-10" onClick={handleClick}>
            <XMarkIcon className="h-10 w-10" />
          </button>
          <ul className="flex flex-col w-4/6 gap-10 text-xl text-white">
            <li>home</li>
            <li>corsi</li>
            <li>esercizio del giorno</li>
          </ul>
        </div>
      )}
    </div>
  );
}
