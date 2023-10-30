import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/outline";
import Navbar from "../components/navbar";
import SectionHeader from "../components/sectionheader";
import Header from "../components/header";
import Input from "../components/input";
import logomin from "../static/images/logo_min_col.svg";
import etage from "../static/images/etage_unchecked.png";
import fenetres from "../static/images/fenetres_unchecked.png";
import interieur from "../static/images/interieur_unchecked.png";
import terrasse from "../static/images/terrasse_unchecked.png";

const mailingLists = [
  {
    id: 1,
    title: "Table à l'intérieur",
    description: "Last message sent an hour ago",
    users: "18 places",
    state: true,
    image: interieur,
    active: true,
  },
  {
    id: 2,
    title: "Table au bord de fenêtre ",
    description: "Last message sent 2 weeks ago",
    users: "14 places",
    state: true,
    image: fenetres,
    active: true,
  },
  {
    id: 3,
    title: "Table à l'etage",
    description: "Last message sent 4 days ago",
    users: "12 places",
    state: true,
    image: etage,
    active: true,
  },
  {
    id: 4,
    title: "Table en terrasse",
    description: "Last message sent 4 days ago",
    users: "0 places",
    state: false,
    image: terrasse,
    active: false,
  },
];

function Reservation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    hour: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log(formData);
  };

  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Navbar />
      <Header desc="Annoncez votre arrivé pour éviter les mauvaises surprises." />
      <form className="max-w-5xl container mx-auto px-4 lg:px-8 px- pb-24">
        <SectionHeader label="informations" />
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Input
            label="Prénom"
            subtitle="First name"
            className="sm:col-span-3"
            type="text"
            required
          />
          <Input
            label="Nom"
            subtitle="Last name"
            className="sm:col-span-3"
            type="text"
            required
          />
          <Input
            label="Adresse email"
            subtitle="Email address"
            className="sm:col-span-3"
            type="email"
            required
          />
          <Input
            label="Numéro de téléphone"
            subtitle="Phone number"
            className="sm:col-span-3"
            type="tel"
            pattern="[0-9]{10}"
          />
        </div>

        <SectionHeader label="details" />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Input
            label="Date"
            subtitle="Date"
            className="sm:col-span-2"
            type="date"
          />
          <Input
            label="Heure"
            subtitle="Hour"
            className="sm:col-span-2"
            type="time"
          />
          <Input
            label="Nombre de personnes"
            subtitle="Number of guests"
            className="sm:col-span-2"
            type="number"
            min="0"
            max="15"
          />
        </div>

        <SectionHeader label="preférences" />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
          <RadioGroup
            value={selectedMailingLists}
            onChange={setSelectedMailingLists}
          >
            <div className=" grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
              {mailingLists.map((mailingList) => (
                <div className=" border-slate-900 p-[3px] border-[1.5px]">
                  <RadioGroup.Option
                    key={mailingList.id}
                    value={mailingList}
                    className={({ checked, active }) =>
                      classNames(
                        "relative bg-white flex cursor-pointer border-slate-900 p-2 border"
                      )
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex-1 flex">
                          <div className="flex flex-col">
                            <img src={mailingLists} alt="" className="w-full" />
                          </div>
                        </div>

                        <div className="text-center">
                          <h3 className="antonio">
                            {mailingList.title.toUpperCase()}
                          </h3>
                          <p className="text-sm crimson  text-gray-500">
                            {mailingList.description}
                          </p>
                        </div>
                        <div
                          className={classNames(
                            active ? "border" : "border-2",
                            checked ? "border-red-800" : "border-transparent",
                            "absolute -inset-px pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                        <img
                          src={logomin}
                          className={classNames(
                            !checked ? "invisible" : "",
                            "h-5 w-5 text-red-600"
                          )}
                          aria-hidden="true"
                          alt=""
                        />
                      </>
                    )}
                  </RadioGroup.Option>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-center border-t mt-6">
          <button
            type="submit"
            className="mt-6 inline-flex items-center px-5 py-3 border border-transparent text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none antonio me-4"
          >
            <CalendarIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            RESERVER UNE TABLE
          </button>
          <div className="mt-6 border-[1.5px] border-slate-900 p-[3px]">
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-slate-900  focus:outline-none antonio border border-slate-900"
            >
              <PhoneIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              NOUS CONTACTER
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Reservation;
