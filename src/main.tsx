import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CustomRouter } from './plugins/router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { icons } from "./plugins/fontsAwesome";


icons.forEach(icon => library.add(icon));
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>
);
