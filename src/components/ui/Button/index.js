import styled from "@emotion/styled";

const VARIANTS = {
  primary: "#06D6A0",
  secondary: "#118AB2",
  danger: "#EF476F",
};

const Button = styled.button`
  text-decoration: none;
  background-color: ${({ variant }) => VARIANTS[variant] || VARIANTS.primary};
  color: #fff;
  border-radius: 5px;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  margin-top: ${({ mt }) => mt && `${mt}rem`};
  margin-right: ${({ mr }) => mr && `${mr}rem`};
  margin-bottom: ${({ mb }) => mb && `${mb}rem`};
  margin-left: ${({ ml }) => ml && `${ml}rem`};
`;

export default Button;
