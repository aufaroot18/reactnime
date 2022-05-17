import Box from "../ui/Box";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import Link from "../ui/Link";
import Paragraph from "../ui/Paragraph";
import { useLocation } from "react-router-dom";
import Modal from "../ui/Modal";
import { useContext, useState } from "react";
import Button from "../ui/Button";
import Flex from "../ui/Flex";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../../utils/helpers/localstorage";
import CollectionContext from "../../contexts/CollectionsContext";
import { Input, Label } from "../ui/Forms";
import StyledCollectionCard, { DeleteButton, EditButton } from "./Index.styled";

export default function CollectionCard({ collection }) {
  const location = useLocation();
  const { setCollections } = useContext(CollectionContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [name, setName] = useState(collection.name);

  function handleChange(e) {
    setName(e.target.value);
  }

  function toggleDeleteModal() {
    setModalDelete((prevState) => !prevState);
  }

  function toggleEditModal() {
    setModalEdit((prevState) => !prevState);
  }

  function editCollection() {
    const items = getItemLocalStorage("collections");
    const collections = JSON.parse(items);

    const foundCollection = collections.find(
      (item) => item.name === collection.name
    );

    foundCollection.name = name;

    setCollections([...collections]);
    setItemLocalStorage("collections", collections);
    toggleEditModal();
  }

  function deleteCollection() {
    const items = getItemLocalStorage("collections");
    const collections = JSON.parse(items);
    const filteredCollections = collections.filter(
      (item) => item.name !== collection.name
    );
    setCollections(filteredCollections);
    setItemLocalStorage("collections", filteredCollections);
  }

  if (!collection) return <Heading>Collection not found</Heading>;

  return (
    <StyledCollectionCard>
      <Box>
        <Image src={collection.poster} alt="image" />
      </Box>
      <Box>
        <Heading as="h4" variant="primary">
          <Link to={`/collections/${collection.name}`} variant="primary">
            {collection.name}
          </Link>
        </Heading>
        <Paragraph variant="gray" mb="1" weight="500">
          {collection.anime.length} Anime
        </Paragraph>
        {location.pathname === "/collections" && (
          <Box>
            <EditButton onClick={toggleEditModal} />
            <DeleteButton onClick={toggleDeleteModal} />
          </Box>
        )}
      </Box>
      <Box>
        <Modal isOpen={modalDelete} onRequestClose={toggleDeleteModal}>
          <Heading variant="primary" mb="0.5" align="center">
            Delete Collection
          </Heading>
          <Paragraph align="center" mb="1">
            Are you sure delete <strong>{collection.name}</strong>?
          </Paragraph>
          <Flex justifyContent="center">
            <Button onClick={deleteCollection}>Delete</Button>
            <Button onClick={toggleDeleteModal}>Close</Button>
          </Flex>
        </Modal>
      </Box>
      <Box>
        <Modal isOpen={modalEdit} onRequestClose={toggleEditModal}>
          <Heading variant="primary" mb="0.5" align="center">
            Edit Collection
          </Heading>
          <Box>
            <Label htmlFor="name">New Collection Name</Label>
            <Input id="name" value={name} onChange={handleChange} />
          </Box>
          <Flex justifyContent="center">
            <Button onClick={editCollection}>Edit</Button>
            <Button onClick={toggleEditModal}>Close</Button>
          </Flex>
        </Modal>
      </Box>
    </StyledCollectionCard>
  );
}
