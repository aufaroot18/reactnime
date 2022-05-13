import styled from "@emotion/styled";

const NavbarList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: ${({ block }) => block || "none"};
  width: 100%;

  @media screen and (min-width: 768px) {
    & {
      display: flex;
      margin-top: 0;
      width: auto;
    }
  }
`;

export default NavbarList;
