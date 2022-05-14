import styled from "@emotion/styled";
import { NavbarList } from "../Navbar";

const StyledFooter = styled.footer`
  background-color: #073b4c;
  color: #fff;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Brand = styled.h2``;

const Author = styled.h4`
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    & {
      margin-bottom: 0;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <Brand>Reactnime</Brand>
        <Author>Developed by aufa</Author>
      </div>
      <NavbarList active />
    </StyledFooter>
  );
}
