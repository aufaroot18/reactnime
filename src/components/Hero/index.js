import styled from "@emotion/styled";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import HeroImage from "../../assets/img/movie.png";
import Image from "../ui/Image";

const StyledHero = styled.section`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column-reverse;

  img {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Hero() {
  return (
    <>
      <StyledHero>
        <Box>
          <Image src={HeroImage} alt="hero" />
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
