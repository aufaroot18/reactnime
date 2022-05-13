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
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleNavbar() {
    setIsNavbarOpen((prevState) => !prevState);
  }

  return (
    <StyledNavbar>
      <Brand>Reactnime</Brand>
      <NavbarToggler onClick={handleNavbar}>
        <FaBars />
      </NavbarToggler>
      <NavbarList block={isNavbarOpen}>
        <NavbarItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/anime">Anime</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">Manga</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/collections">Collection</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/">About</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </StyledNavbar>
  );
}

export { Brand, NavbarToggler, NavbarList, NavbarItem, NavbarLink };
