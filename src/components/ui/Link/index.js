import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "#06D6A0",
  white: "#fff",
  black: "#64748B",
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ variant }) => VARIANTS[variant] || VARIANTS.black};
`;

export default StyledLink;
