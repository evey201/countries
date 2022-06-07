import {
  OverallContainer,
  Image,
  DescriptionContainer,
  Name,
  Title,
  Number,
  SpanTag,
} from "./card.styled";

export const Card = () => {
  return (
    <>
      <OverallContainer>
        <Image alt="flag" src={require("./sample.jpg")} />
        <DescriptionContainer>
          <Name>Germany</Name>
          <Title>
            Population:{" "}
            <SpanTag>
              <Number>19,55565</Number>
            </SpanTag>
          </Title>
          <Title>
            Region:{" "}
            <SpanTag>
              <Number>Europe</Number>
            </SpanTag>
          </Title>
          <Title>
            Capital:{" "}
            <SpanTag>
              <Number>Berlin</Number>
            </SpanTag>
          </Title>
        </DescriptionContainer>
      </OverallContainer>
    </>
  );
};
