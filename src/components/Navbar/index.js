import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavbarList from "./NavbarList";
import NavbarToggler from "./NavbarToggler";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import StyledNavbar from "./Index.styled";

export default function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  /** Toggle navbar. Make navbar can show and hide when clicked. */
  function handleNavbar() {
    setIsNavbarActive((prevState) => !prevState);
  }

  return (
    <StyledNavbar>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" fontSize="1.953">
            Reactnime
          </Heading>
          <NavbarToggler onClick={handleNavbar}>
            <FaBars />
          </NavbarToggler>
          <NavbarList active={isNavbarActive}></NavbarList>
        </Flex>
      </Container>
    </StyledNavbar>
  );
}

export { NavbarList };
