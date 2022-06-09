import styled from "styled-components";
import { Link } from 'react-router-dom'

export const OverallContainer = styled.div`
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 200px;
  background: white;

  &.hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
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