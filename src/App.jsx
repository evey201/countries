import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme } from './assets/styles/theme';
import { Home, CountryDetails } from './pages'
import { Header } from "./components";
import { useDarkMode } from "./hooks";
import { CountryProvider } from "./context/countries/provider";
import { Container } from "./App.styled";


export const App = () => {
  const { theme: currentTheme, toggleTheme } = useDarkMode();
  const isLightThemeActive = currentTheme === 'light';
  return (
    <ThemeProvider theme={ isLightThemeActive ? lightTheme : theme }>
      <CountryProvider>
        <Header title="Where in the world?"  toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <Container>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="country/:name" element={<CountryDetails />} />
        </Routes>
        </Container>
      </CountryProvider>
    </ThemeProvider>
  );
};
