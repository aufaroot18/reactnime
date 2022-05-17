import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../../ui/Button";
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
      name: "Collections",
      path: "collections",
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
      <NavbarItem>
        <a
          target="_blank"
          href="https://aufaroot18.github.io/"
          rel="noreferrer"
        >
          About Me
        </a>
      </NavbarItem>
    </StyledNavbarList>
  );
}

export default NavbarList;
