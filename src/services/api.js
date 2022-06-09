import { request } from "../utils";

export const fetchAllCountries = async () => {
  try {
    const url = `/all`;
    const res = await request.get(url);
    console.log("in api request", res);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};
