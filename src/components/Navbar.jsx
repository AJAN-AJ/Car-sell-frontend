import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
} from "lucide-react";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed z-50 mt-2 m-auto left-0 right-0 bg-[#303030] rounded-full px-6 py-6 w-[95%] md:w-[100%] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          🚗 <span>Car Sale</span>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          {/* Menu Card */}
          <div className="absolute top-6 left-4 right-4 bg-white rounded-2xl p-5 shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-3">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex flex-row justify-between items-center gap-3 p-3 hover:bg-gray-100 border-b-1 border-gray-300"
              >
                <div className="flex gap-3">
                  <img src="/NavbarVec/mage_home-2-fill.png" alt="" />
                  <span>Home</span>
                </div>
                  <img src="/NavbarVec/sideArrow.png" alt="" />
                
              </Link>

              <Link
                to="/cars"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 p-3 hover:bg-gray-100 border-b-1 border-gray-300"
              ><div className="flex gap-3">
                 <img src="/NavbarVec/Vector.png" alt=""/>
                <span>Cars</span> 
                </div>
                  <img src="/NavbarVec/sideArrow.png" alt="" />
                
              </Link>

              <Link
                to="/how"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 p-3 hover:bg-gray-100 border-b-1 border-gray-300"
              >
                <div className="flex gap-3">
                  <img src="/NavbarVec/tabler_arrow-guide.png" alt=""  />
                  <span>How to Order Cars</span>
                </div>
                  <img src="/NavbarVec/sideArrow.png" alt="" />
                
              </Link>

              <HashLink
                href="#contact-section"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 p-3 hover:bg-gray-100 border-b-1 border-gray-300"
              >
                <div className="flex gap-3">
                  <img src="/NavbarVec/material-symbols_call.png" alt="" />
                  <span>Contact Us</span>
                </div>
                  <img src="/NavbarVec/sideArrow.png" alt="" />
               
              </HashLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
