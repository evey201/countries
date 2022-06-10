import React, { useState, useMemo, useCallback, useEffect } from "react";
import { SearchInput, Card } from "../../components";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { fetchAllCountries } from "../../services";
import {
  Container,
  ActionsContainer,
  InputWrapper,
  ButtonWrapper,
  Button,
  CardContainer,
} from "./home.styled";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
      setTimeout(
        async () => {
            setLoading(true);
            const res = await fetchAllCountries();
            setData(res);
            // console.log("useEffect", res);
            setLoading(false);
        }, 5000
      )
    
  }, []);

  if (loading) {
    return "Loading...";
  }
  console.log("useState", data);
  return (
    <>
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
          {data && data.map((product, index) => (
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
