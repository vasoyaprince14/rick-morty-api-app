import { useEffect } from "react";
import {
  getLocations,
  setLocationPage,
  useAppDispatch,
  useAppSelector,
} from "../store";
import LocationList from "./LocationList";
import Pagination from "./Pagination";

export default function LocationPagination() {
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.location.page);
  const pages = useAppSelector((state) => state.location.pages);

  useEffect(() => {
    dispatch(getLocations(page));
  }, [dispatch, page]);

  return (
    <>
      <LocationList />
      <div className="flex justify-center">
        <Pagination
          change={(p) => dispatch(setLocationPage({ page: p }))}
          page={page}
          pages={pages}
        />
      </div>
    </>
  );
}