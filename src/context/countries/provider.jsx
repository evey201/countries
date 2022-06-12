import React, { useState, useEffect, createContext, useCallback } from "react";
import { fetchAllCountries } from "../../services";

export const CountryContext = createContext({});

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState();
  const [state, setState] = useState("loading");

  const getCountryByName = useCallback((name) => {
    if (!countries) return;
    return countries.find((country) => country.name.common === name);
  }, [countries]);

  const getCountryByAltSpelling = (altSpelling) => {
    if (!countries) return;
    return countries.find((country) => country.cca3 === altSpelling);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchAllCountries();
        const data = await response;
        console.log(data);
        const sorted = data.sort((a, b) => b.population - a.population);
        console.log('sorted', sorted);
        setCountries(sorted);
        setState("resolved");
      } catch (error) {
        setState("error");
        console.log(error);
      }
    })();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, getCountryByName, getCountryByAltSpelling, state }}
    >
      {children}
    </CountryContext.Provider>
  );
};
