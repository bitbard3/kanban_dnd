import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { Toaster } from "@/components/ui/toaster";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Toaster />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
