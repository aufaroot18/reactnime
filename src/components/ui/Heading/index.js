import styled from "@emotion/styled";

const VARIANTS = {
  primary: "#06D6A0",
  secondary: "#118AB2",
  black: "#073B4C",
  gray: "#64748B",
  danger: "#EF476F",
};

const Heading = styled.h2`
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  font-weight: ${({ weight }) => weight && weight};
  color: ${({ variant }) => variant && VARIANTS[variant]};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}rem`};
  text-align: ${({ align }) => align && align};
  text-transform: capitalize;
`;

export default Heading;
