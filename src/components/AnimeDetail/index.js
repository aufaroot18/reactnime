import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { GET_DETAIL_ANIME } from "../../graphql/queries";
import CollectionCard from "../CollectionCard";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Loading from "../ui/Loading";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import { useEffect, useState } from "react";
import Image from "../ui/Image";
import Flex from "../ui/Flex";
import Modal from "../ui/Modal";
import AddCollectionModal from "../AddCollectionModal";

const StyledAnimeDetail = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  img {
    border-radius: 10px;
    max-width: 250px;
    width: 100%;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }

  @media screen and (min-width: 768px) {
    img {
      max-width: 300px;
    }
  }
`;

const Cover = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

export default function AnimeDetail() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("collections");
    setCollections(JSON.parse(items));
  }, []);

  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const queryVariables = {
    variables: {
      id,
    },
  };
  const { loading, error, data } = useQuery(GET_DETAIL_ANIME, queryVariables);
  const anime = data && data.Media;

  if (loading) return <Loading />;
  if (error) return "There is error";

  const filteredCollections = collections.filter((collection) => {
    return collection.anime.find((item) => {
      return item.title.english === anime.title.english;
    });
  });

  const listCollections = filteredCollections.map((collection) => (
    <CollectionCard key={collection.id} collection={collection} />
  ));

  return (
    <Section mb="3" mt="3">
      <StyledAnimeDetail>
        <Cover>
          <Box>
            <Image src={anime.coverImage.extraLarge} />
          </Box>
          <Box>
            <Heading as="h2" variant="primary" mb="0.5">
              {anime.title.english}
            </Heading>
            <Paragraph variant="secondary" mb="0.5">
              {anime.genres.map((genre) => genre).join(", ")}
            </Paragraph>
            <Paragraph variant="gray" mb="0.5">
              Release: {anime.startDate.day}-{anime.startDate.month}-
              {anime.startDate.year}
            </Paragraph>
            <Paragraph variant="gray" mb="1">
              Duration: {anime.duration} Mins
            </Paragraph>
            <Button
              target="_blank"
              as="a"
              href={
                anime.trailer &&
                `https://www.youtube.com/watch?v=${anime.trailer.id}`
              }
              variant="danger"
              mr="0.5"
              mb="0.5"
            >
              Trailer
            </Button>
            <Button onClick={toggleModal}>Add Collection</Button>
          </Box>
        </Cover>
        <Box mb="2">
          <Heading as="h4" mb="0.5" variant="gray">
            Description
          </Heading>
          <Paragraph
            dangerouslySetInnerHTML={{ __html: anime.description }}
            align="justify"
          />
        </Box>
        <Box>
          <Heading as="h4" mb="0.5" variant="gray">
            Collections
          </Heading>
          <Flex>
            {filteredCollections.length > 0 ? (
              listCollections
            ) : (
              <Paragraph>
                Collection has not been added. Try to add collection
              </Paragraph>
            )}
          </Flex>
        </Box>
      </StyledAnimeDetail>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <AddCollectionModal
          anime={anime}
          toggleModal={toggleModal}
          collections={collections}
        />
      </Modal>
    </Section>
  );
}
