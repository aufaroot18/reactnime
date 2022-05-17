import styled from "@emotion/styled";
import { FaEdit, FaTrash } from "react-icons/fa";

const StyledCollectionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-right: 1rem;
  align-items: center;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border-radius: 10px;
  overflow: hidden;
  min-width: 250px;

  h4::first-letter {
    text-transform: uppercase;
  }

  img {
    width: 100px;
  }

  button {
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
  }
`;

const EditButton = styled(FaEdit)`
  color: #118ab2;
  cursor: pointer;
  font-size: 1.1rem;
  margin-right: 1rem;
`;

const DeleteButton = styled(FaTrash)`
  color: #ef476f;
  cursor: pointer;
  font-size: 1.1rem;
`;

export default StyledCollectionCard;
export { EditButton, DeleteButton };
