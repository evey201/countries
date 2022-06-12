import styled from 'styled-components';

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 0.4px;
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;