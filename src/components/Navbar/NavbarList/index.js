import menus from "../../../utils/constants/menus";
import Link from "../../ui/Link";
import NavbarItem from "../NavbarItem";
import StyledNavbarList from "./Index.styled";

function NavbarList({ active }) {
  const navbarItems = menus.map((menu) => (
    <NavbarItem key={menu.path}>
      <Link to={menu.path} variant="white">
        {menu.name}
      </Link>
    </NavbarItem>
  ));

  return (
    <StyledNavbarList active={active}>
      {navbarItems}
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
