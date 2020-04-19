import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundry from './ErrorBoundary';

import Quotes  from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
    <Quotes />
    </ErrorBoundry>
  </React.StrictMode>,
  rootElement
);
