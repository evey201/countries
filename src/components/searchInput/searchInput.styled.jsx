import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  display: flex;
  
  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const Icon = styled.span`
  position: absolute;
  padding-top: 18px;
  padding-left: 20px
`
export const InputElement = styled.input`
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  padding: 20px;
  outline: none;
  border: hidden;
  padding-left: 70px;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
