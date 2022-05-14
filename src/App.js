import GlobalStyle from "./components/Global";
import Layout from "./layouts";
import Routes from "./routes";

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
