import React, { useState } from "react";
import "./Pautas.css";
import pauta from "./imgs/pautas-img.png";

const Pautas = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="contenedor">
      <div className="titulo">
        <h1>Inversion en Pautas</h1>
      </div>
      <div className="contenedor2">
        <img src={pauta} alt="" className="pauta-imagen" />
        <div className="opciones">
          <div>
            <input
              type="text"
              className="inversion-pautas"
              placeholder="5"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="vistas"
              placeholder="3"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="clicks"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="contactos"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="Ventas"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="promedio"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h1 className="ventas-generales">35</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pautas;
