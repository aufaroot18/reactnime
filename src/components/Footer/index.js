import { NavbarList } from "../Navbar";
import Box from "../ui/Box";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import StyledFooter from "./Index.styled";

/**
 * Footer Component
 */
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading fontSize="1.953">Reactnime</Heading>
            <Heading as="h3" fontSize="1.25" weight="500">
              Developed by Aufa
            </Heading>
          </Box>
          <NavbarList active />
        </Flex>
      </Container>
    </StyledFooter>
  );
}
