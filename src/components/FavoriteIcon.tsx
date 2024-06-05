import { HTMLAttributes, useEffect, useState } from "react";
import {
  ICharacter,
  IEpisode,
  ILocation,
  favoriteCharacter,
  favoriteEpisode,
  favoriteLocation,
  isFavoritedCharacter,
  isFavoritedEpisode,
  isFavoritedLocation,
  useAppDispatch,
  useAppSelector,
} from "../store";

interface FavoriteIconElement extends HTMLAttributes<HTMLElement> {
  character?: ICharacter;
  episode?: IEpisode;
  location?: ILocation;
}

export default function FavoriteIcon(props: FavoriteIconElement) {
  // data
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.favorite);
  const [favorited, setFavorited] = useState<boolean>(false);

  // methods
  function favorite(): void {
    setFavorited(!favorited);

    if (props.character) {
      dispatch(favoriteCharacter(props.character));
      return;
    }
    if (props.episode) {
      dispatch(favoriteEpisode(props.episode));
      return;
    }
    if (props.location) {
      dispatch(favoriteLocation(props.location));
      return;
    }
  }

  // hooks
  useEffect(() => {
    if (props.character) {
      setFavorited(isFavoritedCharacter(state, props.character));
      return;
    }
    if (props.episode) {
      setFavorited(isFavoritedEpisode(state, props.episode));
      return;
    }
    if (props.location) {
      setFavorited(isFavoritedLocation(state, props.location));
      return;
    }
  }, [state, props.character, props.episode, props.location]);

  return (
    <i
      onClick={favorite}
      className={`${props.className} ${
        favorited ? "bi-heart-fill" : "bi-heart"
      } text-error text-2xl cursor-pointer`}
    ></i>
  );
}