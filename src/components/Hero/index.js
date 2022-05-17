import Box from "../ui/Box";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import HeroImage from "../../assets/img/movie.png";
import Image from "../ui/Image";
import Section from "../ui/Section";
import StyledHero from "./Index.styled";

export default function Hero({ title = "Reactnime" }) {
  return (
    <>
      <Section>
        <StyledHero>
          <Box>
            <Image src={HeroImage} alt="hero" />
          </Box>
          <Box mb="2">
            <Heading variant="primary" fontSize="3.052">
              {title}
            </Heading>
            <Heading
              as="h3"
              variant="gray"
              weight="500"
              mb="1"
              fontSize="1.953"
            >
              Next-gen anime platform
            </Heading>
            <Paragraph mb="1.5" variant="gray" maxWidth="500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, facilis numquam. Beatae mollitia consequuntur quos
              commodi? In velit vel aliquam!
            </Paragraph>
            <Button>Join Now</Button>
          </Box>
        </StyledHero>
      </Section>
    </>
  );
}
