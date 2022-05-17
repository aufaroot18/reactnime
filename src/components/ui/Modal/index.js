import styled from "@emotion/styled";
import ReactModal from "react-modal";

const Modal = styled(ReactModal)`
  position: absolute;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 1rem;
  top: 20%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -20%);
  text-transform: capitalize;
`;

export default Modal;
