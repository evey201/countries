import styled, { css, keyframes } from "styled-components";

export const Skeleton = css`
  .text {
    width: 100%;
    height: 10px;
  }

  .title {
    width: 50%;
    height: 20px;
    margin-bottom: 15px;
  }

  .flags {
    width: 100%;
    height: 150px;
  }

  .thumbnail {
    width: 100px;
    height: 100px;
  }
`;

const loading = keyframes`
    from {
        left: -200px;
    }
    to {
        left: 100%
    }
`;

const getContainerStyles = (props) => {};

export const SkeletonContainer = styled.div`
  background: #ddd;
  margin: 10px 0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(to right, #fff 0%, #f7f7f7 60%, #fff 100%);
    animation: ${loading} 1000ms ease-in-out infinite;
  }

  width: ${({ width }) => width ?? "200px"};
  height: ${({ height }) => height ?? "50px"};
`;
