import GlobalStyle from "./components/Global";
import Layout from "./layouts";
import Routes from "./routes";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
