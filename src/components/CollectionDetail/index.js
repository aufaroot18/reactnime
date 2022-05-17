import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../../utils/helpers/localstorage";
import AnimeCard from "../AnimeCard";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import Box from "../ui/Box";
import Modal from "../ui/Modal";
import { Input, Label } from "../ui/Forms";
import Button from "../ui/Button";
import { EditButton } from "./Index.styled";
import Error from "../ui/Error";
import AnimesContext from "../../contexts/AnimesContext";

export default function CollectionDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [collection, setCollection] = useState({});
  const [newName, setCollectionName] = useState(name);
  const [modalEdit, setModalEdit] = useState(false);
  const animeContextValue = {
    animes,
    setAnimes,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAnimeFromCollection, []);

  /**
   * GET LIST ANIME FROM COLLECTIONS (LOCAL STORAGE)
   */
  function getAnimeFromCollection() {
    const items = getItemLocalStorage("collections");
    const collections = JSON.parse(items);

    const foundCollection = collections.find(
      (collection) => collection.name === name
    );

    setCollection(foundCollection);
    foundCollection ? setAnimes(foundCollection.anime) : setAnimes([]);
  }

  /**
   * Hanndle Change Name in Form.
   * @param {object} e - object event
   */
  function handleChange(e) {
    setCollectionName(e.target.value);
  }

  /**
   * EDIT COLLECTION
   */
  function editCollection() {
    // GET COLLECTIONS FROM LOCALSTORAGE
    const items = getItemLocalStorage("collections");
    const collections = JSON.parse(items);

    // FIND CURRENT COLLECTION AND UPDATE TO LOCALSTORAGE
    const foundCollection = collections.find((item) => item.name === name);
    foundCollection.name = newName;
    setItemLocalStorage("collections", collections);

    // UPDATE NEW NAME AND NEW COLLECTION TO STATE
    setCollection({ ...collection, name: newName });
    setCollectionName(newName);

    toggleEditModal();

    // NAVIGATE TO NEW NAME COLLECTION
    navigate(`/collections/${newName}`, { replace: true });
  }

  /**
   * TOGGLE EDIT MODAL. TO SHOW AND HIDE EDIT MODAL
   */
  function toggleEditModal() {
    setModalEdit((prevState) => !prevState);
  }

  if (!collection) return <Error>{name} Collection Not Found</Error>;

  const animeList =
    animes.length > 0 ? (
      <Flex>
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </Flex>
    ) : (
      <Heading as="h4" variant="gray" align="center">
        Anime has not been added
      </Heading>
    );

  return (
    <AnimesContext.Provider value={animeContextValue}>
      <Section mb="3" mt="3">
        <Box mb="0.5">
          <Flex justifyContent="center" alignItems="center">
            <Heading variant="primary" align="center">
              {collection.name} Collection
            </Heading>
            <EditButton onClick={toggleEditModal} />
          </Flex>
        </Box>
        <Paragraph mb="2" align="center" maxWidth="600" variant="gray">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab inventore
          dolores, dolore est saepe explicabo eum similique consequuntur vitae
          et?
        </Paragraph>
        {animeList}
        <Box>
          <Modal isOpen={modalEdit} onRequestClose={toggleEditModal}>
            <Heading variant="primary" mb="0.5" align="center">
              Edit Collection
            </Heading>
            <Box>
              <Label htmlFor="name">New Collection Name</Label>
              <Input id="name" value={newName} onChange={handleChange} />
            </Box>
            <Flex justifyContent="center">
              <Button onClick={editCollection}>Edit</Button>
              <Button onClick={toggleEditModal}>Close</Button>
            </Flex>
          </Modal>
        </Box>
      </Section>
    </AnimesContext.Provider>
  );
}
