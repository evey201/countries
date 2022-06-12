import { useContext } from 'react'
import { CountryContext } from '../context/countries/provider';

export const useCountries = () => {
    const { countries, getCountryByName, getCountryByAltSpelling, state } = useContext(CountryContext);
  
    return {
      countries,
      getCountryByName,
      getCountryByAltSpelling,
      state,
    };
  };