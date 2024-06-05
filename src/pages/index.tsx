import FavoriteButton from "../components/FavoriteButton";
import CharacterCarousel from "../components/CharacterCarousel";
import EpisodeCarousel from "../components/EpisodeCarousel";
import LocationCarousel from "../components/LocationCarousel";
import HomeSection from "../components/HomeSection";
import { useAppSelector } from "../store";
// import OrganismCharacterPagination from "../components/CharacterPagination";
// import OrganismCharacterList from "../components/CharacterList";

export default function IndexPage() {
  const characters = useAppSelector(
    (state) => state.character.filteredCharacters
  );
  const episodes = useAppSelector((state) => state.episode.filteredEpisodes);
  const locations = useAppSelector((state) => state.location.filteredLocations);

  return (
    <>
      <HomeSection />

      <FavoriteButton className="md:hidden fixed bottom-10 right-10" />

      <CharacterCarousel characters={characters} />

      <EpisodeCarousel episodes={episodes} />

      <LocationCarousel locations={locations} />
      {/* <OrganismCharacterPagination></OrganismCharacterPagination> */}
    </>
  );
}
