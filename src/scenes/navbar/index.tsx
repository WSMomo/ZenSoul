import { useState } from "react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="md:p-5 p-10 bg-red-50 flex justify-between items-center">
      {/* LEFT / LOGO */}
      <div className="w-28">
        <img src={Logo} alt="logo" className="h-full w-full" />
      </div>
      {/* RIGHT / MENU */}
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      {/* NAVBAR MODAL */}
      {isOpen && (
        <div className="fixed w-4/6 bg-blue-500 top-0 bottom-0 right-0 flex items-center justify-center">
          <button className="fixed right-10 top-10" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
