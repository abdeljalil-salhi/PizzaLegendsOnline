import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";

import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root: Root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
