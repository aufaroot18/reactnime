import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import AddCollectionModal from "../AddCollectionModal";
import CollectionCard from "../CollectionCard";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import Flex from "../ui/Flex";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../../utils/helpers/localstorage";
import CollectionContext from "../../contexts/CollectionsContext";
import Box from "../ui/Box";
import { AddButton } from "./Index.styled";

export default function CollectionList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collections, setCollections] = useState([]);
  const collectionContextValue = {
    collections,
    setCollections,
  };

  useEffect(getCollections, []);

  function getCollections() {
    const items = getItemLocalStorage("collections");

    items
      ? setCollections(JSON.parse(items))
      : setItemLocalStorage("collections", []);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <CollectionContext.Provider value={collectionContextValue}>
      <Section mt="3" mb="3">
        <Box mb="0.5">
          <Flex justifyContent="center" alignItems="center">
            <Heading align="center" variant="primary">
              Collections
            </Heading>
            <AddButton onClick={toggleModal} />
          </Flex>
        </Box>
        <Paragraph
          align="center"
          variant="gray"
          mb="2"
          weight="500"
          maxWidth="500"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          laborum?
        </Paragraph>
        <Flex justifyContent="center">
          {collections.length > 0 ? (
            collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))
          ) : (
            <Heading as="h4" variant="primary" align="center">
              Collections has not beed added
            </Heading>
          )}
        </Flex>
        <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
          <AddCollectionModal
            toggleModal={toggleModal}
            collections={collections}
            setCollections={"aufa"}
          />
        </Modal>
      </Section>
    </CollectionContext.Provider>
  );
}
