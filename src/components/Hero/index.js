import styled from "@emotion/styled";
import Box from "../ui/Box";
import Button from "../ui/Button";

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

const Title = styled.h2`
  font-size: 3.815rem;
  color: #06d6a0;
`;

const SubTitle = styled.h3`
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 1.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Hero() {
  return (
    <>
      <StyledHero>
        <Box>
          <Image src="https://picsum.photos/600/400" alt="hero" />
        </Box>
        <Box mb="2">
          <Title>Reactnime</Title>
          <SubTitle>Next-gen anime platform</SubTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            facilis numquam. Beatae mollitia consequuntur quos commodi? In velit
            vel aliquam!
          </Description>
          <Button>Join Now</Button>
        </Box>
      </StyledHero>
    </>
  );
}
