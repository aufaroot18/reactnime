import styled from "@emotion/styled";
import Link from "../ui/Link";
import Heading from "../ui/Heading";
import Image from "../ui/Image";

const StyledAnimeCard = styled.div`
  text-align: center;
  flex-basis: 50%;
  margin-bottom: 2rem;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  img {
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }
`;

export default function AnimeCard({ anime }) {
  return (
    <StyledAnimeCard>
      <Image src={anime.coverImage.large} alt="anime" />
      <Heading as="h3" mb="0.5" weight="500">
        <Link to={`/anime/${anime.id}`} variant="primary">
          {anime.title.english}
        </Link>
      </Heading>
      <Heading as="h4" weight="500" variant="gray">
        {anime.seasonYear || "N/A"}
      </Heading>
    </StyledAnimeCard>
  );
}
