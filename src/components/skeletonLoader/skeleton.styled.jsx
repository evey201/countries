import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
`;


export const SkeletonContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.colors.darkGray};
  border-radius: 4px;

  animation: ${loading} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  width: ${({ width }) => width || "18rem"};
  height: ${({ height }) => height || "20rem"};
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 30px;

`;
