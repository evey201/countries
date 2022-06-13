import styled from "styled-components";

export const OverallContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  padding: 50px;
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  align-self: center;
  justify-self: baseline;
  max-width: 500px;
`;

export const Info = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto auto auto;
  gap: 30px 30px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  div:nth-of-type(1),
  div:nth-of-type(2) {
    align-self: baseline;
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
  }

  div:nth-of-type(1) {
  }

  div:nth-of-type(1) {
  }
`;

export const Title = styled.h2`
    grid-column: 1 / 3;
    margin: 0;
    align-self: flex-end;
    @media (max-width: 800px) {
      grid-column: 1 / 2;
    }
`
export const CustomButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: start;
  width: 150px;
  justify-content: space-evenly;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 35px;
  border-radius: 5px;
  font-weight: ${({ theme }) => theme.fontWeight.slim};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-bottom: 50px;
  @media (max-width: 375px) {
    margin-left: 0;
  }
  span {

  }
`;

export const BorderCountries = styled.div`
  grid-column: 1 / 3;
  font-size: ${({ theme }) => theme.fontSize.small};
  display: flex;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const BorderCountryList = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
`;