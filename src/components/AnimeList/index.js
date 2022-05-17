import { useQuery } from "@apollo/client";
import { GET_ANIME } from "../../graphql/queries";
import AnimeCard from "../AnimeCard";
import Heading from "../ui/Heading";
import Loading from "../ui/Loading";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import Flex from "../ui/Flex";
import { useState } from "react";
import Pagination, { PaginationItem } from "../ui/Pagination";
import Box from "../ui/Box";
import Error from "../ui/Error";

export default function AnimeList() {
  const [currentPage, setCurrentPage] = useState(1);
  const variables = {
    variables: {
      page: currentPage,
    },
  };
  const { loading, error, data } = useQuery(GET_ANIME, variables);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const animes = data.Page.media;
  const page = data.Page.pageInfo;

  function nextPage() {
    page.hasNextPage && setCurrentPage((prevState) => prevState + 1);
  }

  function prevPage() {
    currentPage > 1 && setCurrentPage((prevState) => prevState - 1);
  }

  return (
    <Section mb="3" mt="3">
      <Heading mb="1" variant="primary" align="center">
        Top Anime
      </Heading>
      <Paragraph mb="3" align="center" maxWidth="600" variant="gray">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab inventore
        dolores, dolore est saepe explicabo eum similique consequuntur vitae et?
      </Paragraph>
      <Flex>
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </Flex>
      <Box mt="3">
        <Pagination>
          <PaginationItem onClick={prevPage} link>
            {currentPage > 1 && "Prev"}
          </PaginationItem>
          <PaginationItem>{page.currentPage}</PaginationItem>
          <PaginationItem onClick={nextPage} link>
            {page.hasNextPage && "Next"}
          </PaginationItem>
        </Pagination>
      </Box>
    </Section>
  );
}
