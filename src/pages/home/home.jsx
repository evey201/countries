import React, {useState} from "react";
import {  Card, Filters, SkeletonElement } from "../../components";
import { useCountries } from '../../hooks'
import {
  Container,
  CardContainer,
} from "./home.styled";

export const Home = () => {
  const { countries, state } = useCountries();
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const  handleSelectedItemChange = ({ selectedItem }) => {
    setSelectedValue(selectedItem);
  }
  console.log('in home', countries)
  return (
    <>
      <Container>
        <Filters 
          selectedValue={selectedValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleitemChanged={handleSelectedItemChange}
        />
        <CardContainer>
          {state === 'resolved' ? 
            countries.filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
            .filter((country) => {
              return country.continents.some((continent) => continent.toLowerCase().includes(selectedValue.toLowerCase()));
            })
            .map((product, index) => (
            <Card
              key={index}
              name={product?.name?.common}
              region={product?.region}
              capital={product?.capital}
              population={product?.population}
              images={product?.flags?.png}
            />
          )) : (
            <>
              {
                [1, 2, 3, 4 ,5 , 6,7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((skeleton) => (
                <SkeletonElement key={skeleton} width="200px" height="180px" />
              ))
              }
            </>
          )}
        </CardContainer>
      </Container>
    </>
  );
};
