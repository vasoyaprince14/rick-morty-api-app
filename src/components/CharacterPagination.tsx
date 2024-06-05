import { useEffect } from "react";
import { getCharacters, setCharacterPage, useAppDispatch, useAppSelector } from "../store";
import Pagination from "./Pagination";
import CharacterList from "./CharacterList";

export default function CharacterPagination() {
  const dispatch = useAppDispatch();

  const page = useAppSelector((state) => state.character.page);
  const pages = useAppSelector((state) => state.character.pages);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  return (
    <>
      <CharacterList />
      <div className="flex justify-center">
        <Pagination
          change={(p) => dispatch(setCharacterPage({ page: p }))}
          page={page}
          pages={pages}
        />
      </div>
    </>
  );
}