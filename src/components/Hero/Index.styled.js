import styled from "@emotion/styled";

const StyledHero = styled.div`
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

    p {
      text-align: justify;
    }
  }
`;

export default StyledHero;
