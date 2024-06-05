import { Link } from "react-router-dom";
import { IEpisode } from "../store";
import { HTMLAttributes } from "react";
import FavoriteIcon from "./FavoriteIcon";

interface EpisodeCardElement extends HTMLAttributes<HTMLDivElement> {
  episode: IEpisode;
}

export default function EpisodeCard(props: EpisodeCardElement) {
  console.log("orginiwsm episode card started")
  return (
    <div className={`card relative h-fit ${props.className}`}>
      <article className="card-content">
        {/* header */}
        <header className="flex gap-4 justify-between items-center">
          <i className="bi bi-collection-play text-lg"></i>
          <h4 className="flex-1">
            <p className="max-w-[130px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {props.episode.name}
            </p>
            <p>{props.episode.episode}</p>
          </h4>
          <FavoriteIcon episode={props.episode} />
        </header>

        <Link
          to={`/episode/${props.episode.id}`}
          className="btn btn-white w-full block mt-2 text-center"
        >
          View details
        </Link>
      </article>
    </div>
  );
}