import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages'
import { Header } from "./components";


export const App = () => {

  return (
    <>
      <Header title="Where in the world?" />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </>
  );
};
