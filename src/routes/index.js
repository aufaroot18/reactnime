import { Route, Routes } from "react-router-dom";
import Anime from "../pages/animes";
import AnimeDetail from "../pages/animes/detail";
import Collections from "../pages/collections";
import CollectionsDetail from "../pages/collections/detail";
import ErrorPage from "../pages/404";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Anime />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/anime/detail" element={<AnimeDetail />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/detail" element={<CollectionsDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
