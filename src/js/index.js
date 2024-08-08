// import react into the bundle
 import React from "react";
 import ReactDOM from "react-dom/client";

// // include your styles into the webpack bundle
 import "../styles/index.css";

// import your own components
//  import Home from "./component/home.jsx";
 import SecondsCounter from "./component/SecondsCounter.jsx";


 const App = () => {
 return (
     <div>
         <SecondsCounter />
     </div>
 );
 };

 export default App;
 
 let counter = 0;
 setInterval(function () {
   counter = counter + 1;
   ReactDOM.createRoot(document.getElementById("app")).render(
     <SecondsCounter counter={counter} />
   );
 }, 1000);
 console.log(counter);

// //render your react application
