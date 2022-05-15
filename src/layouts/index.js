import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
