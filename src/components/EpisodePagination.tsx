import { useEffect } from "react";
import { getEpisodes, setEpisodePage, useAppDispatch, useAppSelector } from "../store";
import Pagination from "./Pagination";
import EpisodeList from "./EpisodeList";

export default function EpisodePagination() {
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.episode.page);
  const pages = useAppSelector((state) => state.episode.pages);

  useEffect(() => {
    dispatch(getEpisodes(page));
  }, [dispatch, page]);

  return (
    <>
      <EpisodeList />
      <div className="flex justify-center">
        <Pagination
          change={(p) => dispatch(setEpisodePage({ page: p }))}
          page={page}
          pages={pages}
        />
      </div>
    </>
  );
}