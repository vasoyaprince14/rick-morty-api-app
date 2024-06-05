import { Link } from "react-router-dom";
import { IEpisodes } from "../store";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeCarousel(props: {
  episodes: IEpisodes;
}) {
 
  return (
    <section id="episodes" className="relative">
      <header className="flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <i className="bi-search text-base mr-2"></i>
          Episodes
        </a>
        <Link to="/episodes" className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </Link>
      </header>
      <article className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-5 w-auto py-5">
          {props.episodes.map((episode) => {
            return (
              <EpisodeCard
                className="snap-center sm:snap-start w-full max-w-[250px] min-w-[250px]"
                key={episode.id}
                episode={episode}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}