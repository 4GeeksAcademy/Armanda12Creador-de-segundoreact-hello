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
  const unidades = Math.floor(props.counter % 10);
  const decenas = Math.floor((props.counter % 100) / 10);
  const centenas = Math.floor((props.counter % 1000) / 100);
  const miles = Math.floor((props.counter % 10000) / 1000);

  // props.counter [unidades, decenas, centenas];

  return (
    <div
      className="container text-bg-dark d-flex justify-content-center align-items-center mt-5
    "
    >
      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
      <i class="fa-regular fa-clock"></i>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>0</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>0</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white ">
        <h1>{miles}</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>{centenas}</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>{decenas}</h1>
      </div>

      <div className="row align-items-center col-1 bg-black p-2 text-dark bg-opacity-50 p-3 my-0 mx-2  rounded-3 text-white">
        <h1>{unidades}</h1>
      </div>
    </div>
  );
}

export default SecondsCounter;
