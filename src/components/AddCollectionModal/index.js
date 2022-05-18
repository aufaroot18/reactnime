import { nanoid } from "nanoid";
import { useState } from "react";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Form, { Input, Label } from "../ui/Forms";
import Heading from "../ui/Heading";
import placeholder from "../../assets/img/placeholder.jpg";
import { setItemLocalStorage } from "../../utils/helpers/localstorage";
import Paragraph from "../ui/Paragraph";

export default function AddCollectionModal({
  anime,
  toggleModal,
  collections,
}) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  /**
   * HANDLE INPUT FORM
   * @param {object} e - event object
   */
  function handleChange(e) {
    setName(e.target.value);
  }

  /**
   * HANDLE FORM IF SUBMITTED
   * @param {object} e - event object
   */
  function handleSubmit(e) {
    e.preventDefault();
    validation() && addAnimeToCollection();
  }

  /**
   * ADD ANIME TO COLLECTION
   */
  function addAnimeToCollection() {
    // CHECK IS COLLECTION EXIST
    const isCollectoinExist = collections.find(
      (collection) => name.toLowerCase() === collection.name.toLowerCase()
    );

    /**
     * IF EXIST, PUSH ANIME TO COLLECTION
     * IF NO, CREATE NEW COLLECTIOn
     */
    if (isCollectoinExist) {
      anime && isCollectoinExist.anime.push(anime);
    } else {
      collections.push({
        id: nanoid(),
        name,
        poster: anime ? anime.coverImage.medium : placeholder,
        anime: anime ? [anime] : [],
      });
    }

    // SAVE COLLECTIONS TO LOCALSTORAGE
    setItemLocalStorage("collections", collections);

    toggleModal();
    setName("");
  }

  /**
   * CHECK VALIDATION FORM
   */
  function validation() {
    if (name === "") {
      setNameError(true);
      return false;
    }
    return true;
  }

  return (
    <Box>
      <Heading variant="primary" mb="1" align="center">
        Add Collection
      </Heading>
      <Form onSubmit={handleSubmit}>
        <Box>
          <Label htmlFor="name">Collection Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={handleChange}
            autoFocus
            required
          />
        </Box>
        {nameError && <Paragraph variant="danger">Name is required</Paragraph>}
        <Box mt="1">
          <Button mr="0.5">Add</Button>
          <Button onClick={toggleModal} type="button">
            Close
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
