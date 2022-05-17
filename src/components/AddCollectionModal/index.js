import { nanoid } from "nanoid";
import { useState } from "react";
import Box from "../ui/Box";
import Button from "../ui/Button";
import { Input, Label } from "../ui/Forms";
import Heading from "../ui/Heading";
import placeholder from "../../assets/img/placeholder.jpg";

export default function AddCollectionModal({
  anime,
  toggleModal,
  collections,
}) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(collections);

    const isCollectoinExist = collections.find(
      (collection) => name.toLowerCase() === collection.name.toLowerCase()
    );

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

    localStorage.setItem("collections", JSON.stringify(collections));

    setName("");
  }

  return (
    <>
      <Heading variant="primary" mb="1" align="center">
        Add Collection
      </Heading>
      <form onSubmit={handleSubmit}>
        <Box>
          <Label htmlFor="name">Collection Name</Label>
          <Input id="name" type="text" value={name} onChange={handleChange} />
        </Box>
        <Button mr="0.5">Add</Button>
        <Button onClick={toggleModal} type="button">
          Close
        </Button>
      </form>
    </>
  );
}
