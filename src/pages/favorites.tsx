import CharacterCarousel from "../components/CharacterCarousel";
import EpisodeCarousel from "../components/EpisodeCarousel";
import LocationCarousel from "../components/LocationCarousel";
import GenericSection from "../components/GenericSection";
import {
  getFavoriteCharactersByArray,
  getFavoriteEpisodesByArray,
  getFavoriteLocationsByArray,
  useAppSelector,
} from "../store";

export default function FavoritesPage() {
  const characters = useAppSelector((state) =>
    getFavoriteCharactersByArray(state.favorite)
  );
  const episodes = useAppSelector((state) =>
    getFavoriteEpisodesByArray(state.favorite)
  );
  const locations = useAppSelector((state) =>
    getFavoriteLocationsByArray(state.favorite)
  );

  return (
    <>
      <GenericSection isFavoritePage={true}>
        All your favorites characters, episodes and locations in one place
      </GenericSection>

      {!!characters.length && (
        <CharacterCarousel characters={characters} />
      )}

      {!!episodes.length && <EpisodeCarousel episodes={episodes} />}
      {!!locations.length && <LocationCarousel locations={locations} />}
    </>
  );
}
