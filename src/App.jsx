import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Header, SearchInput, Card } from "./components";
import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";
import { fetchAllCountries } from "./services";
import {
  Container,
  ActionsContainer,
  InputWrapper,
  ButtonWrapper,
  Button,
  CardContainer,
} from "./App.styled";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetchAllCountries();
      setData(res);
      // console.log("useEffect", res);
      setLoading(false);
    };
    getData();
  }, []);
  

  if (loading) {
    return "Loading...";
  }
  console.log("useState", data);
  return (
    <>
      <Header title="Where in the world?" />
      <Container>
        <ActionsContainer>
          <InputWrapper>
            <SearchInput placeholder="Search for a new country..." />
          </InputWrapper>
          <ButtonWrapper>
            <Button>
              Filter by region <ArrowIcon height="25px" width="25px" />
            </Button>
          </ButtonWrapper>
        </ActionsContainer>
        <CardContainer>
          {data.map((product, index) => (
            <Card
              key={index}
              name={product?.name?.common}
              region={product?.region}
              capital={product?.capital}
              population={product?.population}
              images={product?.flags?.png}
            />
          ))}
          {/* <Card /> */}
        </CardContainer>
      </Container>
    </>
  );
};
