import { useQuery } from "@apollo/client";
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
import StyledAnimeDetail, {
  Cover,
  CoverImage,
  CoverInfo,
} from "./Index.styled";

export default function AnimeDetail() {
  const { id } = useParams();
  const [collections, setCollections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const variables = {
    variables: {
      id,
    },
  };
  const { loading, error, data } = useQuery(GET_DETAIL_ANIME, variables);
  const anime = data && data.Media;

  useEffect(getCollectionsLocalStorage, []);

  // RENDER LOADING AND ERROR
  if (loading) return <Loading />;
  if (error) return "There is error";

  function getCollectionsLocalStorage() {
    const items = localStorage.getItem("collections");
    const collections = JSON.parse(items);
    setCollections(collections);
  }

  // TOGGLE MODAL. SHOW AND HIDE ADD COLLECTION MODAL
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  // GET COLLECTIONS FROM THIS ANIME
  function getAnimeCollections() {
    const filterredColections = collections.filter((collection) => {
      return collection.anime.find((item) => {
        return item.title.english === anime.title.english;
      });
    });
    return filterredColections;
  }

  // RENDER COLLECTIONS FROM THIS ANIME.
  const animeCollections = getAnimeCollections();
  const listCollections = !animeCollections.length ? (
    <Paragraph>Collection has not been added. Try to add collection</Paragraph>
  ) : (
    animeCollections.map((collection) => (
      <CollectionCard key={collection.id} collection={collection} />
    ))
  );

  return (
    <Section mb="3" mt="3">
      <StyledAnimeDetail>
        <Cover>
          <CoverImage>
            <Image src={anime.coverImage.extraLarge} />
          </CoverImage>
          <CoverInfo>
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
          </CoverInfo>
        </Cover>
        <Box mb="2">
          <Heading as="h3" mb="0.5" variant="gray" align="center">
            Description
          </Heading>
          <Paragraph
            dangerouslySetInnerHTML={{ __html: anime.description }}
            align="justify"
          />
        </Box>
        <Box>
          <Heading as="h3" mb="1" variant="gray" align="center">
            Collections
          </Heading>
          <Flex justifyContent="center">{listCollections}</Flex>
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
