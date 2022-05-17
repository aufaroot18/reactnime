import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Brand from "./Brand";
import NavbarList from "./NavbarList";
import NavbarItem from "./NavbarItem";
import NavbarToggler from "./NavbarToggler";
import Container from "../ui/Container";

const StyledNavbar = styled.nav`
  background-color: #06d6a0;
  color: #fff;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  function handleNavbar() {
    setIsNavbarActive((prevState) => !prevState);
  }

  return (
    <StyledNavbar>
      <Container>
        <Brand>Reactnime</Brand>
        <NavbarToggler onClick={handleNavbar}>
          <FaBars />
        </NavbarToggler>
        <NavbarList active={isNavbarActive}></NavbarList>
      </Container>
    </StyledNavbar>
  );
}

export { Brand, NavbarToggler, NavbarList, NavbarItem };
