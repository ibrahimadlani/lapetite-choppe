import React from "react";
import Navbar from "../components/navbar";
import { MailIcon } from "@heroicons/react/outline";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import SectionHeader from "../components/sectionheader";
import Header from "../components/header";
import Input from "../components/input";

function Contact() {
  return (
    <>
      <Navbar />
      <Header desc="Annoncez votre arrivé pour éviter les mauvaises surprises." />
      <form className="max-w-5xl container mx-auto px-4 lg:px-8 px- pb-24">
        <SectionHeader label="contactez-nous" />

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
          <Input
            label="Message"
            subtitle="Text message"
            className="sm:col-span-6"
            type="text"
            textarea
          />
        </div>
        <div className="flex justify-center border-t mt-6">
          <button
            type="submit"
            className="mt-6 inline-flex items-center px-5 py-3 border border-transparent text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none antonio me-4"
          >
            <PaperAirplaneIcon
              className="-ml-1 mr-2 h-5 w-5"
              aria-hidden="true"
            />
            ENVOYER
          </button>
          <div className="mt-6 border-[1.5px] border-slate-900 p-[3px]">
            <a
              href="mailto:ibrahim@adlani.com"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-slate-900  focus:outline-none antonio border border-slate-900"
            >
              <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              ENVOYER PAR MAIL
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
