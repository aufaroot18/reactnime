import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  function getAnimeFromCollection() {
    const items = getItemLocalStorage("collections");
    const collections = JSON.parse(items);

    const foundCollection = collections.find(
      (collection) => collection.name === name
    );

    setCollection(foundCollection);
    foundCollection ? setAnimes(foundCollection.anime) : setAnimes([]);
  }

  function handleChange(e) {
    setCollectionName(e.target.value);
  }

  function editCollection() {
    setCollectionName(newName);
    const items = getItemLocalStorage("collections");
    const collections = JSON.parse(items);

    const foundCollection = collections.find((item) => item.name === name);

    setCollection({ ...collection, name: newName });
    foundCollection.name = newName;
    setItemLocalStorage("collections", collections);
  }

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
