import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./hooks";
import character from "./character";
import episode from "./episode";
import favorite from "./favorite";
import location from "./location";

export enum ETypes {
  Character = "Character",
  Episode = "Episode",
  Location = "Location",
}

export const store = configureStore({
  reducer: {
    character,
    episode,
    location,
    favorite
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export * from "./character";
export * from "./episode";
export * from "./location";
export * from "./favorite";