import React from "react";
import { SearchInput, Card } from "../../components";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import {
  Container,
  ActionsContainer,
  InputWrapper,
  ButtonWrapper,
  Button,
  CardContainer,
} from "./home.styled";

export const Home = () => {
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
        {/* <SkeletonElement type="title" /> */}
        {/* <CardContainer>
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
        </CardContainer> */}
      </Container>
    </>
  );
};
