import axios from "axios";

const options = {
  baseURL: `https://restcountries.com/v3.1`,
  headers: {
    Accept: "application/json,text/plain,*/*",
    "Content-Type": "application/json",
  },
};

export const request = axios.create(options);
