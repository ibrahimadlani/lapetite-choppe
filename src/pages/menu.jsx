import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";

function Menu() {
  return (
    <>
      <Navbar />
      <Header desc="Annoncez votre arrivé pour éviter les mauvaises surprises." />

      <div>Bienvenue sur la page de menu!</div>
    </>
  );
}

export default Menu;
