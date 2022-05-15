import styled from "@emotion/styled";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const StyledHero = styled.section`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
  }
`;

const Image = styled.img`
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 992px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export default function Hero() {
  return (
    <>
      <StyledHero>
        <Box>
          <Image src="https://picsum.photos/600/400" alt="hero" />
        </Box>
        <Box mb="2">
          <Heading variant="primary" fontSize="3.815">
            Reactnime
          </Heading>
          <Heading as="h3" variant="gray" weight="500" mb="1">
            Next-gen anime platform
          </Heading>
          <Paragraph mb="1.5" variant="gray" maxWidth="500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            facilis numquam. Beatae mollitia consequuntur quos commodi? In velit
            vel aliquam!
          </Paragraph>
          <Button>Join Now</Button>
        </Box>
      </StyledHero>
    </>
  );
}
