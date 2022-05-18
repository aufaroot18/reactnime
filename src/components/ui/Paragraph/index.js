import { css } from "@emotion/react";
import styled from "@emotion/styled";

const VARIANTS = {
  primary: "#06D6A0",
  secondary: "#118AB2",
  black: "#073B4C",
  gray: "#64748B",
  danger: "#EF476F",
};

const Paragraph = styled.p`
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  color: ${({ variant }) => variant && VARIANTS[variant]};
  font-weight: ${({ weight }) => weight && weight};
  text-align: ${({ align }) => align && align};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
      margin-left: auto;
      margin-right: auto;
    `}
`;

export default Paragraph;
