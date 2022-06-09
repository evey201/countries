import styled from "styled-components";

export const Container = styled.div`
  background: whitesmoke;
  border: 1px solid whitesmoke;
  height: 100vh;
  max-height: 100%;
`;

export const ActionsContainer = styled.div`
  margin: 3rem 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;


  @media (max-width: 375px) {
    margin: 3rem 18px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export const InputWrapper = styled.div`
  width: 30%;
  @media (max-width: 375px) {
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  width: 20%;
  @media (max-width: 375px) {
    width: 50%;
  }
`

export const Button = styled.button`
  display: flex;
  outline: none;
  background-color: white;
  align-items: center;
  border: hidden;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  margin: 3rem 40px;
  dısplay: flex;
  flex-direction: row;
  justify-content: space-between;


  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
