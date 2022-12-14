import React from "react";
import Contact from "./contact";
import Image from "next/image";
import Salamun from "/public/logo_salamun.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const NavbarIndex = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="top-0 fixed bg-white w-full mx-auto">
        {/* Navigation bar */}
        <div className=" flex mx-auto bg-white justify-between my-[18px] ml-[15px] mr-[15px] lg:ml-[139px] lg:mr-[139px]">
          <div>
            <Link href="/">
              <Image
                className="w-[105px] md:w-full"
                src={Salamun}
                alt="logo_salamun"
              />
            </Link>
          </div>
          <div className=" font-semibold text-gray-600">
            <div className="hidden md:block md:flex">
              <ul className=" mx-5 py-5 ">
                <li>
                  <Link className="hover:text-blue-300" href="/#service">
                    Service
                  </Link>
                </li>
              </ul>
              <ul className=" mx-5 py-5">
                <li>
                  <Link
                    className="hover:text-blue-300 scroll-smooth"
                    href="/#teams"
                  >
                    Teams
                  </Link>
                </li>
              </ul>
              <ul className="mx-5 py-3">
                <li>
                  <Link href="/contactPage">
                    <Contact />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex md:hidden ">
              <button
                className=" text-[28px] relative flex justify-center items-center group"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars />
                <div
                  className={
                    "absolute top-full group-focus:block min-w-full w-max bg-white shadow-md mr-16 mt-1 rounded" +
                    (navbarOpen ? " block" : " hidden")
                  }
                >
                  <ul className="text-left border font-normal text-sm rounded">
                    <li className="p-4 py-1 hover:bg-gray-100 border-b ">
                      <a href="/#service">Service</a>
                    </li>
                    <li className="p-4 py-1 hover:bg-gray-100 border-b">
                      <a href="/#teams">Teams</a>
                    </li>
                    <li className="p-4 py-1 hover:bg-gray-100 border-b">
                      <a href="/contactPage">Contact Us!</a>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Tutup Navbar */}
      </div>
    </>
  );
};

export default NavbarIndex;
