import styled from "styled-components";
import { Link } from "react-router-dom";

export const OverallContainer = styled.div`
  margin: 5px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  transition: transform ease-in 100ms;
  float: left;
  width: 200px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  &.hover {
    cursor: pointer;
    transform: scale(1.04);
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
    margin: 5px;
`
export const Image = styled.img`
  width: 100%;
  height: 150px;
  ${"" /* padding-bottom: 5px; */}
`;

export const DescriptionContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Name = styled.h3`
  font-weight: 800;
  font-size: 14px;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 12px;
`;
export const Number = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.slim};
  font-size: 12px;
  margin: 0px;
`;

export const SpanTag = styled.span`
  display: inline-block;
  margin: 0px;
`;

export const Route = styled(Link)``;
