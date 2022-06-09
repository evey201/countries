import { useHistory } from 'react-router-dom'
import {
  OverallContainer,
  Image,
  DescriptionContainer,
  Name,
  Title,
  Number,
  SpanTag,
  Route
} from "./card.styled";

export const Card = ({ name, population, region, images, capital }) => {
  return (
    <>
      <OverallContainer>
        {/* <Route to='/move'><Image alt="flag" src={require("./sample.jpg")} /></Route> */}
        <Route to='/move'><Image alt="flag" src={ images } /></Route>
        <DescriptionContainer>
          {/* <Name>Germany</Name> */}
          <Name>{ name }</Name>
          <Title>
            Population:{" "}
            <SpanTag>
              {/* <Number>19,55565</Number> */}
              <Number>{population}</Number>
            </SpanTag>
          </Title>
          <Title>
            Region:{" "}
            <SpanTag>
              <Number>{ region }</Number>
              {/* <Number>Europe</Number> */}
            </SpanTag>
          </Title>
          <Title>
            Capital:{" "}
            <SpanTag>
              <Number>{ capital }</Number>
              {/* <Number>Berlin</Number> */}
            </SpanTag>
          </Title>
        </DescriptionContainer>
      </OverallContainer>
    </>
  );
};
