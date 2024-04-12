import React, { useState } from "react";
import "./Pautas.css";

const Pautas = () => {

  const handleInputChange = (event) => {
    console.log(event.target.value);
  }
  return (
    <div className="contenedor">
      <div className="titulo">
        <h1>Inversion en Pautas</h1>
      </div>
      <div className="opciones">
        <div>
          <h2>Vistas</h2>
          <input type="text" className="vistas" onChange={handleInputChange}/>
        </div>
        <div>
          <h2>Clicks</h2>
          <input type="text" className="clicks" onChange={handleInputChange} />
        </div>
        <div>
          <h2>Contactos</h2>
          <input type="text" className="contactos" onChange={handleInputChange}/>
        </div>
        <div>
          <h2>Ventas</h2>
          <input type="text" className="Ventas" onChange={handleInputChange} />
        </div>
        <div>
          <h2>Promedio</h2>
          <input type="text" className="promedio"  onChange={handleInputChange}/>
        </div>
      </div>
    </div>
  );
};

export default Pautas;
