import styled from "styled-components";
import { Link } from 'react-router-dom'

export const OverallContainer = styled.li`
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 200px;
  margin: 20px 0;
  background: white;

  &.hover {
    cursor: pointer;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  ${'' /* padding-bottom: 5px; */}
`;

export const DescriptionContainer = styled.div`
    padding: 10px
`

export const Name = styled.h3`
    font-weight: 800;
    font-size: 14px;
`

export const Title = styled.p`
    font-weight: 800;
    font-size: 12px;
`
export const Number = styled.p`
    font-weight: 300;
    font-size: 12px;
    margin: 0px
`

export const SpanTag = styled.span`
    display: inline-block;
    margin: 0px;
`

export const Route = styled(Link)`
  
`