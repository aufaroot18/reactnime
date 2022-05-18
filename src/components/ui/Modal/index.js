import styled from "@emotion/styled";
import ReactModal from "react-modal";

const Modal = styled(ReactModal)`
  position: absolute;
  background: rgb(255, 255, 255);
  padding: 1rem;
  overflow: auto;
  outline: none;
  border-radius: 10px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  text-transform: capitalize;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default Modal;
