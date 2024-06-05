import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
  } from "@reduxjs/toolkit";
  
  export interface ICharacterLocation {
    name: string;
    url: string;
  }
  
  export interface ICharacter {
    id: string;
    name: string;
    species: string;
    status: string;
    type: string;
    gender: string;
    image: string;
    url: string;
    episode: string[];
    location: ICharacterLocation;
    origin: ICharacterLocation;
  }
  
  export interface ICharacters extends Array<ICharacter> {}
  
  interface IState {
      character: ICharacter | null;
    characters: ICharacters;
    filteredCharacters: ICharacters;
    page: number;
    pages: number;
  
    notFound: boolean;
  }
  
  const initialState = {
    character: null,
    characters: [],
    filteredCharacters: [],
    page: 1,
    pages: 100,
    notFound: false,
  } as IState;
  
  export const getCharacter = createAsyncThunk(
    "character/getCharacter",
    async (id: string) => {
      return (
        await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      ).json();
    }
  );
  export const getCharacterEpisode =createAsyncThunk(
    'character/getCharacterEpisode',async(id:string)=>{
        return (
            await fetch(`https://rickandmortyapi.com/api/character/${id}`)
          ).json();
    }
  )
  
  export const getCharacters = createAsyncThunk(
    "character/getCharacters",
    async (page: number) => {
      return (
        await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      ).json();
    }
  );
  
  export const firstCharacters = createAsyncThunk(
    "character/firstCharacters",
    async () => {
      return (
        await fetch(`https://rickandmortyapi.com/api/character?page=1`)
      ).json();
    }
  );
  
  export const filterCharacters = createAsyncThunk(
    "character/filterCharacters",
    async ({ name }: { name: string }) => {
      return (
        await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
      ).json();
    }
  );
  
  export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
      setCharacterPage(state: IState, action: PayloadAction<{ page: number }>) {
        state.page = action.payload.page;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getCharacter.fulfilled, (state: IState, action) => {
        state.character = action.payload
      });
      builder.addCase(getCharacters.fulfilled, (state: IState, action) => {
        state.characters = action.payload.results;
        state.pages = action.payload.info.pages;
      });
      builder.addCase(firstCharacters.fulfilled, (state: IState, action) => {
        state.notFound = false;
        state.filteredCharacters = action.payload.results;
      });
      builder.addCase(filterCharacters.fulfilled, (state: IState, action) => {
        if (action.payload.error) {
          state.notFound = true;
          return;
        }
        state.notFound = false;
        state.filteredCharacters = action.payload.results;
        window.location.href = "#characters";
      });
    },
  });
  
  export const { setCharacterPage } = characterSlice.actions;
  
  export default characterSlice.reducer;