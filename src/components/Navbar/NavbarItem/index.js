import styled from "@emotion/styled";

const NavbarItem = styled.li`
  margin-bottom: 1rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    & {
      margin-bottom: 0;
      margin-left: 1rem;
    }
  }
`;

export default NavbarItem;
