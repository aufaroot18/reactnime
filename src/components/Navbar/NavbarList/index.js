import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "../../ui/Link";
import NavbarItem from "../NavbarItem";

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
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Anime",
      path: "anime",
    },
    {
      name: "Manga",
      path: "manga",
    },
    {
      name: "Collections",
      path: "collections",
    },
    {
      name: "About",
      path: "about",
    },
  ];

  return (
    <StyledNavbarList active={active}>
      {menus.map((menu) => (
        <NavbarItem key={menu.path}>
          <Link to={menu.path} variant="white">
            {menu.name}
          </Link>
        </NavbarItem>
      ))}
    </StyledNavbarList>
  );
}

export default NavbarList;
