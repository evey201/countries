import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Header, SearchInput, Card } from "./components";
import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";
import { fetchAllCountries } from "./services";
import {
  Container,
  ActionsContainer,
  ButtonWrapper,
  Button,
  CardContainer,
} from "./App.styled";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetchAllCountries()
      console.log(res)
      setLoading(false)
    };
    getData()
  }, []);

  if(loading) {
    return 'Loading...'
  }
  return (
    <>
      <Header title="Where in the world?" />
      <Container>
        <ActionsContainer>
          <SearchInput placeholder="search for a new country..." />
          <ButtonWrapper>
            <Button>
              Filter by region <ArrowIcon height="25px" width="25px" />
            </Button>
          </ButtonWrapper>
        </ActionsContainer>
        <CardContainer>
          <Card />
        </CardContainer>
      </Container>
    </>
  );
};
