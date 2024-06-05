import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
  } from "@reduxjs/toolkit";
  
  export interface ILocation {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
  }
  
  export interface ILocations extends Array<ILocation> {}
  
  interface IState {
    location: ILocation | null;
    locations: ILocations;
    filteredLocations: ILocations;
    page: number;
    pages: number;
    notFound: boolean;
  }
  
  const initialState = {
    location: null,
    locations: [],
    filteredLocations: [],
    page: 1,
    pages: 100,
    notFound: false,
  } as IState;
  
  export const getLocation = createAsyncThunk(
    "location/getLocation",
    async (id: string) => {
      return (
        await fetch(`https://rickandmortyapi.com/api/location/${id}`)
      ).json();
    }
  );
  
  export const getLocations = createAsyncThunk(
    "location/getLocations",
    async (page: number) => {
      return (
        await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
      ).json();
    }
  );
  
  export const firstLocations = createAsyncThunk(
    "location/firstLocations",
    async () => {
      return (
        await fetch(`https://rickandmortyapi.com/api/location?page=1`)
      ).json();
    }
  );
  
  export const filterLocations = createAsyncThunk(
    "location/filterLocations",
    async ({ name }: { name: string }) => {
      return (
        await fetch(`https://rickandmortyapi.com/api/location?name=${name}`)
      ).json();
    }
  );
  
  export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
      setLocationPage(state: IState, action: PayloadAction<{ page: number }>) {
        state.page = action.payload.page;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getLocation.fulfilled, (state: IState, action) => {
        state.location = action.payload;
      });
      builder.addCase(getLocations.fulfilled, (state: IState, action) => {
        state.locations = action.payload.results;
        state.pages = action.payload.info.pages;
      });
      builder.addCase(firstLocations.fulfilled, (state: IState, action) => {
        state.notFound = false;
        state.filteredLocations = action.payload.results;
      });
      builder.addCase(filterLocations.fulfilled, (state: IState, action) => {
        if (action.payload.error) {
          state.notFound = true;
          return;
        }
        state.notFound = false;
        state.filteredLocations = action.payload.results;
        window.location.href = "#locations";
      });
    },
  });
  
  export const { setLocationPage } = locationSlice.actions;
  
  export default locationSlice.reducer;