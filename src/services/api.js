import { request } from "../utils";

export const fetchAllCountries = async () => {
  try {
    const url = `/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders`;
    const res = await request.get(url);
    console.log("in api request", res);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};
