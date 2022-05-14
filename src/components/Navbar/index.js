import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Brand from "./Brand";
import NavbarLink from "./NavbarLink";
import NavbarList from "./NavbarList";
import NavbarItem from "./NavbarItem";
import NavbarToggler from "./NavbarToggler";

const StyledNavbar = styled.nav`
  background-color: #06d6a0;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  function handleNavbar() {
    setIsNavbarActive((prevState) => !prevState);
  }

  return (
    <StyledNavbar>
      <Brand>Reactnime</Brand>
      <NavbarToggler onClick={handleNavbar}>
        <FaBars />
      </NavbarToggler>
      <NavbarList active={isNavbarActive}></NavbarList>
    </StyledNavbar>
  );
}

export { Brand, NavbarToggler, NavbarList, NavbarItem, NavbarLink };
