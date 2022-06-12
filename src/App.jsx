import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme } from './assets/styles/theme';
import { Home } from './pages'
import { Header } from "./components";
import { useDarkMode } from "./hooks";
import { CountryProvider } from "./context/countries/provider";


export const App = () => {
  const { theme: currentTheme, toggleTheme } = useDarkMode();
  const isLightThemeActive = currentTheme === 'light';
  return (
    <ThemeProvider theme={ isLightThemeActive ? lightTheme : theme }>
      <CountryProvider>
        <Header title="Where in the world?"  toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </CountryProvider>
    </ThemeProvider>
  );
};
