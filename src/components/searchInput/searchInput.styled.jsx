import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: max-content;
  width: 100%;
  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    padding-bottom: 20px;
  }
  ${'' /* &.icon {
    position: relative;
  } */}
`;

export const InputElement = styled.input`
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  padding: 20px;
  outline: none;
  border: hidden;
`;
