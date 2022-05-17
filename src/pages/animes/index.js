import { useLocation } from "react-router-dom";
import AnimeList from "../../components/AnimeList";
import Hero from "../../components/Hero";

export default function Anime() {
  const { pathname } = useLocation();
  const title = pathname === "/" ? "Reactnime" : "Anime";

  return (
    <>
      <Hero title={title} />
      <AnimeList />
    </>
  );
}
