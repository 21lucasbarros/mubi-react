import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Cabecalho/Header";
import Main from "./components/Principal/Main";
import Footer from "./components/Rodape/Footer";
import Content from "./components/Conteudo/Content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Main />
    <Content />
    <Footer />
  </StrictMode>
);
