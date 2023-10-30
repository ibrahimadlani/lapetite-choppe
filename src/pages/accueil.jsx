import React, { Fragment, useState } from "react";
import { MailIcon, UserGroupIcon } from "@heroicons/react/solid";

import fond_accueil from "../static/images/fond-accueil.jpg";
import Navbar from "../components/navbar";

function Accueil() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white h-screen flex flex-col">
      {/* NAVIGATION */}
      <Navbar />
      {/* Hero section */}
      <div className="relative bg-gray-900 grow">
        {/* BACKGROUND */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={fond_accueil}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* FILTER */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-zinc-900 opacity-60"
        />

        {/* CONTENT */}
        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl crimson">
            Où la Passion
            <br />
            Rencontre la Perfection.
          </h1>
          <p className="mt-4 text-2xl text-white crimson">
            Découvrez une expérience culinaire inégalée centrée sur les
            meilleures coupes de viande grillées à la perfection.
          </p>
          <div class="flex">
            <a
              href="/reservation"
              className="mt-8 inline-block text-slate-900 border border-transparent text-base font-medium antonio flex border border-white bg-white p-[3px] me-2"
            >
              <div className="inline-block border border-transparent py-3 px-8 text-base font-medium antonio flex border border-white">
                <UserGroupIcon className="w-6 h-6 me-2" />
                <p>RESERVER UNE TABLE</p>
              </div>
            </a>

            <a
              href="/menu"
              className="mt-8 inline-block text-white border border-[1.5px] border-transparent text-base font-medium antonio flex border border-white p-[3px]"
            >
              <div className="inline-block text-white border border-transparent py-3 px-8 text-base font-medium antonio flex border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>

                <p>VOIR LE MENU</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
