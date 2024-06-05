import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  ICharacter,
  ICharacters,
  IEpisode,
  IEpisodes,
  ILocation,
  ILocations,
} from ".";

export interface IState {
  characters: {
    [id: string]: ICharacter;
  };
  episodes: {
    [id: string]: IEpisode;
  };
  locations: {
    [id: string]: ILocation;
  };
}

const initialState = {
  characters:
    JSON.parse(sessionStorage.getItem("favorite:character") ?? "{}") ?? {},
  episodes:
    JSON.parse(sessionStorage.getItem("favorite:episode") ?? "{}") ?? {},
  locations:
    JSON.parse(sessionStorage.getItem("favorite:location") ?? "{}") ?? {},
} as IState;

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    favoriteCharacter(state: IState, action: PayloadAction<ICharacter>) {
      const unfavorite = !!state.characters[action.payload.id];

      state.characters[action.payload.id] = action.payload;

      if (unfavorite) {
        delete state.characters[action.payload.id];
      }

      sessionStorage.setItem(
        "favorite:character",
        JSON.stringify(state.characters)
      );
    },
    favoriteEpisode(state: IState, action: PayloadAction<IEpisode>) {
      const unfavorite = !!state.episodes[action.payload.id];

      state.episodes[action.payload.id] = action.payload;

      if (unfavorite) {
        delete state.episodes[action.payload.id];
      }

      sessionStorage.setItem(
        "favorite:episode",
        JSON.stringify(state.episodes)
      );
    },
    favoriteLocation(state: IState, action: PayloadAction<ILocation>) {
      const unfavorite = !!state.locations[action.payload.id];

      state.locations[action.payload.id] = action.payload;

      if (unfavorite) {
        delete state.locations[action.payload.id];
      }

      sessionStorage.setItem(
        "favorite:location",
        JSON.stringify(state.locations)
      );
    },
  },
});

export function isFavoritedCharacter(
  state: IState,
  { id }: ICharacter
): boolean {
  return !!state.characters[id];
}

export function isFavoritedEpisode(state: IState, { id }: IEpisode): boolean {
  return !!state.episodes[id];
}

export function isFavoritedLocation(state: IState, { id }: ILocation): boolean {
  return !!state.locations[id];
}

export function getFavoriteCharactersByArray(state: IState): ICharacters {
  const items: ICharacters = [];
  for (const i in state.characters) {
    items.push(state.characters[i]);
  }
  return items;
}

export function getFavoriteEpisodesByArray(state: IState): IEpisodes {
  const items: IEpisodes = [];
  for (const i in state.episodes) {
    items.push(state.episodes[i]);
  }
  return items;
}

export function getFavoriteLocationsByArray(state: IState): ILocations {
  const items: ILocations = [];
  for (const i in state.locations) {
    items.push(state.locations[i]);
  }
  return items;
}

export const { favoriteCharacter, favoriteEpisode, favoriteLocation } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;