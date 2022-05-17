import Link from "../ui/Link";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import StyledAnimeCard from "./Index.styled";

export default function AnimeCard({ anime }) {
  return (
    <StyledAnimeCard>
      <Image src={anime.coverImage.large} alt={anime.title.english} />
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
