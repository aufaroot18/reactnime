import Link from "../ui/Link";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import StyledAnimeCard from "./Index.styled";
import Button from "../ui/Button";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import Modal from "../ui/Modal";
import Paragraph from "../ui/Paragraph";
import Flex from "../ui/Flex";
import AnimesContext from "../../contexts/AnimesContext";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../../utils/helpers/localstorage";

export default function AnimeCard({ anime }) {
  const [removeModal, setRemoveModal] = useState(false);
  const { animes, setAnimes } = useContext(AnimesContext);
  const { pathname } = useLocation();
  const isAtCollection = pathname.includes("/collections");

  /**
   * REMOVE ANIME FROM THIS COLLECTION
   */
  function removeAnime() {
    // REMOVE THIS ANIME FROM LIST ANIME
    const newAnimes = animes.filter(
      (item) => item.title.english !== anime.title.english
    );
    setAnimes([...newAnimes]);

    // SET NEW ANIMES TO THIS COLLECTION
    const collections = getCollectionsLocalStorage();
    const collection = collections.find((collection) =>
      pathname.includes(collection.name)
    );
    collection.anime = [...newAnimes];

    // UPDATE NEW COLLECTIONS TO LOCALSTORAGE
    setItemLocalStorage("collections", collections);
  }

  /**
   * GET COLLECTIONS FROM LOCALSTORAGE
   */
  function getCollectionsLocalStorage() {
    const item = getItemLocalStorage("collections");
    const collections = JSON.parse(item);
    return collections;
  }

  /**
   * TOGGLE MODAL. SHOW AND HIDE REMOVE MODAL
   */
  function toggleRemoveModal() {
    setRemoveModal((prevState) => !prevState);
  }

  return (
    <StyledAnimeCard>
      <Image src={anime.coverImage.large} alt={anime.title.english} />
      <Heading as="h3" mb="0.5" weight="500">
        <Link to={`/anime/${anime.id}`} variant="primary">
          {anime.title.english}
        </Link>
      </Heading>
      <Heading as="h4" weight="500" variant="gray" mb="1">
        {anime.seasonYear || "N/A"}
      </Heading>
      {isAtCollection && (
        <Button variant="danger" onClick={toggleRemoveModal}>
          Remove
        </Button>
      )}
      <Modal isOpen={removeModal} onRequestClose={toggleRemoveModal}>
        <Heading variant="primary" mb="0.5" align="center">
          Remove Anime
        </Heading>
        <Paragraph align="center" mb="1">
          Are you sure to remove <strong>{anime.title.english}</strong>?
        </Paragraph>
        <Flex justifyContent="center">
          <Button onClick={removeAnime}>Remove</Button>
          <Button onClick={toggleRemoveModal}>Close</Button>
        </Flex>
      </Modal>
    </StyledAnimeCard>
  );
}
