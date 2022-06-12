import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  display: flex;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    
  }
`;

export const Icon = styled.span`
  position: absolute;
  padding-top: 18px;
  padding-left: 20px
`
export const InputElement = styled.input`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  padding: 20px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  caret-color: ${({ theme }) => theme.colors.white};
  padding-left: 70px;
  &::placeholder {
      color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
