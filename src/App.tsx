import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  firstCharacters,
  firstEpisodes,
  firstLocations,
  useAppDispatch,
} from "./store";

import Footer from "./components/Footer";
import IndexPage from "./pages";
import CharactersPage from "./pages/characters";
import CharacterPage from "./pages/character";
import EpisodesPage from "./pages/episodes";
import EpisodePage from "./pages/episode";
import LocationsPage from "./pages/locations";
import LocationPage from "./pages/location";
import FavoritesPage from "./pages/favorites";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(firstCharacters());
    dispatch(firstEpisodes());
    dispatch(firstLocations());
  }, [dispatch]);

  return (
    <Router>
      <div className="p-10 xl:p-20 xl:pb-5 flex flex-col gap-10">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/location/:id" element={<LocationPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}