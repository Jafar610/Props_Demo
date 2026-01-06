import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/card.css";
import Container from "./components/Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container />
  </StrictMode>
);
