// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import Body from './Routes/RutasPrivadas.jsx'
// "bootstrap/scss/bootstrap";
// 'react-select/dist/react-select.css'
// import 'react-loading-skeleton/dist/skeleton.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//     <BrowserRouter>

//       <Body />

//     </BrowserRouter>

//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
("bootstrap/scss/bootstrap");
("react-select/dist/react-select.css");
import "react-loading-skeleton/dist/skeleton.css";

import Body from "./Routes/RutasPrivadas";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error(
    'Failed to find the root element. Make sure you have a div with id="root" in your HTML.'
  );
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  </React.StrictMode>
);
