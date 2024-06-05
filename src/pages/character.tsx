import { useParams} from "react-router-dom";
import {
  ILocation,
  getCharacter,
  getEpisode,
  useAppDispatch,
  useAppSelector,
} from "../store";
import { useEffect, useState } from "react";

import CharacterPagination from "../components/CharacterPagination";
import LocationCard from "../components/LocationCard";
import banner from "../../public/rickmorty.png"
import PageLayout from "../components/PageLayout";
// import home from "/bg-home.png";
import FavoriteIcon from "../components/FavoriteIcon";
// import EspisodeDisplayButton from "../components/EpisodeDisplayButton";
// import EpisodeCarousel from "../components/EpisodeCarousel";
// import EpisodeCard from "../components/EpisodeCard";
// import OrganismEpisodeList from "../components/EpisodeList";
// import EspisodeDisplayButton from "../components/EpisodeDisplayButton";
import EpisodeDisplayButton from "../components/EpisodeDisplayButton";

export default function CharacterPage() {
  // data
  const params = useParams();
  const dispatch = useAppDispatch();
  // const characters = useAppSelector(
  //   (state) => state.character.filteredCharacters
  // );
  // const episodes = useAppSelector((state) => state.episode.filteredEpisodes);
  const character = useAppSelector((state) => state.character.character);
  const [origin, setOrigin] = useState<ILocation | null>(null);
  const [location, setLocation] = useState<ILocation | null>(null);

  // hooks
  useEffect(() => {
    dispatch(getCharacter(params.id!));
  }, [dispatch, params]);

  useEffect(() => {
    document.location.href = "#body";

    (async function getCharacterOrigin() {
      setOrigin(null);
      if (!character) return;
      if (!character.origin.url) return;
      setOrigin(await (await fetch(character.origin.url)).json());
    })();

    (async function getCharacterLocation() {
      setLocation(null);
      if (!character) return;
      if (!character.location.url) return;
      setLocation(await (await fetch(character.location.url)).json());
    })();
  }, [character]);
  const episode = useAppSelector((state) => state.episode.episode);

  useEffect(() => {
    document.location.href = "#body";
    dispatch(getEpisode(params.id!));
  }, [dispatch, params]);
  console.log(episode)
  // let ep=['1'];
 let  ep=character?.episode.map((episodeUrl) => {
    return  episodeUrl.split("/").slice(-1)[0];
    // console.log(episodeId)
    
    
  })
  console.log(ep);

  return (
    character && (
      <>
        <PageLayout>
          {/* image */}
          <div className="md:max-w-[300px] h-fit flex rounded-md flex-col justify-center items-center overflow-hidden">
            <img
              loading="lazy"
              alt={character.name}
              src={character.image}
              className="min-w-max min-h-max w-full"
            />
          </div>

          <div className="flex flex-col flex-1 gap-10">
            {/* name */}
            <div className="flex-1 flex flex-col gap-4">
              <header className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold">{character.name}</h1>
                <FavoriteIcon character={character} />
              </header>

              <p className=" inline-flex gap-2 items-center">
                <i className="bi bi-collection-play text-xl"></i>
                Participated in {character.episode.length} episode

              </p>

              <aside className="w-full inline-flex flex-wrap gap-2 z-10">
                <span
                  className={`badge ${
                    character.status === "Alive"
                      ? "badge-outline-success"
                      : "badge-outline-error"
                  }`}
                >
                  <i className="bi-activity mr-2"></i>
                  {character.status}
                </span>
                <span className="badge badge-white">
                  <i className="bi-person mr-2"></i>
                  {character.species}
                </span>
                <span className="badge badge-white">
                  <i className="bi-gender-ambiguous mr-2"></i>
                  {character.gender}
                </span>
              </aside>
            </div>

            <aside className="flex flex-row max-sm:flex-wrap gap-10 z-10">
              {/* locations */}
              {origin && (<div className="flex flex-col justify gap-2">
                <h4 className="text-xl font-bold">Origin</h4>
                <LocationCard
                  location={origin}
                  className="max-sm:flex-1"
                />
                </div>
              
              )}
              {location && (<div className="flex flex-col justify gap-2">
                <h4 className="text-xl font-bold">Location</h4>
                <LocationCard
                  location={location}
                  className="max-sm:flex-1"
                />
                </div>
              
              )}
            </aside>
          </div>

          <aside className="max-md:hidden flex justify-center items-center flex-1">
        <img
          loading="lazy"
          src={banner}
          alt="Rick and Morty art"
          className="absolute w-[350px] -top-100 pl-4"
        />
      </aside>
        </PageLayout>

        <hr />
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold">Episode Participated in</h4>
        <EpisodeDisplayButton ep={ep}/>
      </div>
      
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold">More Characters</h4>
          <CharacterPagination />
        </div>
      </>
    )
  );
}
