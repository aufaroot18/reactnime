import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { GET_ANIME } from "../../graphql/queries";
import AnimeCard from "../AnimeCard";
import Heading from "../ui/Heading";
import Loading from "../ui/Loading";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";

const AnimeImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

const AnimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Pagination = styled.nav``;

export default function AnimeList() {
  const { loading, error, data } = useQuery(GET_ANIME);

  if (error) return "Something error";

  const animeCards =
    data &&
    data.Page.media.map((anime) => {
      return (
        <AnimeCard key={anime.id}>
          <AnimeImage src={anime.coverImage.large} alt="anime" />
          <Heading as="h3" weight="500" variant="gray" mb="1" fontSize="1.5">
            {anime.title.english}
          </Heading>
          <Paragraph weight="500">{anime.seasonYear || "N/A"}</Paragraph>
        </AnimeCard>
      );
    });

  return (
    <Section>
      <Heading mb="1" variant="primary" align="center">
        Trending Anime
      </Heading>
      <Paragraph mb="3" align="center" maxWidth="600" variant="gray">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab inventore
        dolores, dolore est saepe explicabo eum similique consequuntur vitae et?
      </Paragraph>
      <AnimeWrapper>{loading ? <Loading /> : animeCards}</AnimeWrapper>
      <Pagination>
        <Heading as="h2" align="center">
          Pagination Here
        </Heading>
      </Pagination>
    </Section>
  );
}
