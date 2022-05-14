import { css } from "@emotion/react";
import styled from "@emotion/styled";
import NavbarItem from "../NavbarItem";
import NavbarLink from "../NavbarLink";

const StyledNavbarList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  width: 100%;

  // ACTIVE STATE
  ${({ active }) => css`
    display: ${active ? "block" : "none"};
  `}

  @media screen and (min-width: 768px) {
    & {
      display: flex;
      margin-top: 0;
      width: auto;
    }
  }
`;

function NavbarList({ active }) {
  const menus = ["Home", "Anime", "Manga", "Collections", "About"];

  return (
    <StyledNavbarList active={active}>
      {menus.map((menu) => (
        <NavbarItem key={menu}>
          <NavbarLink to="/">{menu}</NavbarLink>
        </NavbarItem>
      ))}
    </StyledNavbarList>
  );
}

export default NavbarList;
