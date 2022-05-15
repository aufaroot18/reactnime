import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const ring = keyframes`
  0% {
  transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #06d6a0;
    border-color: #06d6a0 transparent #06d6a0 transparent;
    animation: ${ring} 1.2s linear infinite;
  }
`;

export default Loading;
