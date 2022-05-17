import styled from "@emotion/styled";

const NavbarToggler = styled.i`
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default NavbarToggler;
