import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  z-index: 1;

  @media (max-width: 375px) {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
  }
`;

export const TitleWrapper = styled.div``;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 800;
  @media (max-width: 375px) {
    font-weight: 800;
    font-size: 14px;
  }
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  display: flex;
  outline: none;
  background-color: white;
  align-items: center;
  border: hidden;
  cursor: pointer;
`;
