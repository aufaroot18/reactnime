import styled from "@emotion/styled";
import { NavbarList } from "../Navbar";
import Box from "../ui/Box";
import Container from "../ui/Container";

const StyledFooter = styled.footer`
  background-color: #073b4c;
  color: #fff;

  @media screen and (min-width: 768px) {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Brand = styled.h2``;

const Author = styled.h4`
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    & {
      margin-bottom: 0;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Box>
          <Brand>Reactnime</Brand>
          <Author>Developed by aufa</Author>
        </Box>
        <NavbarList active />
      </Container>
    </StyledFooter>
  );
}
