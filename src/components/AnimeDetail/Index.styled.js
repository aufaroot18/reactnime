import styled from "@emotion/styled";

const StyledAnimeDetail = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  img {
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    max-width: 250px;
    width: 100%;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }

  h2 {
    font-size: 1.563rem;
  }

  @media screen and (min-width: 768px) {
    img {
      max-width: 300px;
    }

    h2 {
      font-size: 1.953rem;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 2.441rem;
    }
  }
`;

const Cover = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const CoverImage = styled.div`
  flex-basis: 40%;

  @media screen and (min-width: 992px) {
    flex-basis: auto;
  }
`;

const CoverInfo = styled.div`
  flex-basis: 60%;
`;

export default StyledAnimeDetail;
export { Cover, CoverImage, CoverInfo };
