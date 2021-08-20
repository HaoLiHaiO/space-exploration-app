import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import MarsWeather from "./components/MarsWeather";
import "./App.css";
require("dotenv").config();

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={MarsWeather} path="/marsweather" />
      </div>
    </BrowserRouter>
  );
}
