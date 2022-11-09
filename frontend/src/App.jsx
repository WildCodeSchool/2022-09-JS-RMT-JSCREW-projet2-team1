import React, { useState } from "react";

import AllProducts from "@pages/AllProducts";
import Basket from "@pages/Basket";
import Home from "@pages/Home";
import OneProduct from "@pages/OneProduct";

import Footer from "./components/Footer";
import Header from "./components/Header";

import pokemons from "./services/pokemons";

import "./App.css";

function App() {
  const [page, setPage] = useState({ path: "one Product", index: 1 });

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page.path === "Home" && <Home pokemons={pokemons} />}
      {page.path === "Products" && <AllProducts />}
      {page.path === "Basket" && <Basket />}
      {page.path === "one Product" && (
        <OneProduct pokemon={pokemons[page.index - 1]} setPage={setPage} />
      )}
      {page.path === "Contact" && <Footer />}
    </div>
  );
}

export default App;
