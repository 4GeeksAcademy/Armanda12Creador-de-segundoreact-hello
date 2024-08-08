import React, { useState, useEffect } from "react";
import "../../styles/index.css";

function SecondsCounter(props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Descomposición de los segundos en unidades, decenas y centenas
  const unidades = Math.floor(seconds % 10);
  const decenas = Math.floor((seconds / 10) % 10);
  const centenas = Math.floor((seconds / 100) % 10);

  props.counter [unidades, decenas, centenas];

  return (
    <div
      className="container text-bg-dark d-flex justify-content-center align-items-center mt-5
    "
    >
      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          fill="currentColor"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>0</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>0</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white ">
        <h1>{props.counter  / 1 % 10}</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>{props.counter / 1 % 10}</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>{props.counter / 1  % 10 }</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>{props.counter  % 10}</h1>
      </div>
    </div>
  );
}

export default SecondsCounter;
