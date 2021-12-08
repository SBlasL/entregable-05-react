import React, { useState } from 'react';
import './style.css';
import useState from 'react';
// import useEffect from 'react';
// import Alert from 'react';

function ComponentUseEffect() {
  const [contadorSuma, setContadorSuma] = useState(0);
  const [contadorResta, setContadorResta] = useState(0);
  const resultado = contadorSuma + contadorResta;

  const handlerClick = () => {
    setContadorSuma(contadorSuma + 1);
  };

  const handlerClick1 = () => {
    setContadorResta(contadorResta - 1);
  };

  function Alerta() {
    alert('Excelente, agregaste a tu carrito');
  }

  return (
    <div>
      <button onClick={handlerClick}>Agregar</button> <tab />
      <button onClick={handlerClick1}>Quitar</button>
      <p>Estas agregando {resultado} productos</p>
      <p>
        <button onClick={Alerta}>Agregar al Carrito</button>
      </p>
    </div>
  );
}
export default ComponentUseEffect;
