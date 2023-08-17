import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./app";
import './theme/reset.scss';

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Unable to find the root element.");
}
