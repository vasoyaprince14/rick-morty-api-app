import { type ChangeEvent, useEffect, useRef, ElementRef } from "react";
import {
  ETypes,
  filterCharacters,
  filterEpisodes,
  filterLocations,
  firstCharacters,
  firstEpisodes,
  firstLocations,
  useAppDispatch,
  useAppSelector,
} from "../store";



export default function FilterSearch() {
  const type = useRef<ETypes>(ETypes.Character);
  const inputRef = useRef<ElementRef<"input">>(null);

  const dispatch = useAppDispatch();
  const notFound = useAppSelector(
    (state) =>
      state.character.notFound ||
      state.episode.notFound ||
      state.location.notFound
  );

  useEffect(() => {}, [notFound]);

  const actionsByType = {
    [ETypes.Character]: () => {
      dispatch(filterCharacters({ name: getInputRefValue() }));
    },
    [ETypes.Episode]: () => {
      dispatch(filterEpisodes({ name: getInputRefValue() }));
    },
    [ETypes.Location]: () => {
      dispatch(filterLocations({ name: getInputRefValue() }));
    },
  };

  function getInputRefValue(): string {
    return inputRef.current?.value ?? "";
  }

  function changeType(e: ChangeEvent<HTMLSelectElement>): void {
    type.current = ETypes[e.target.value as keyof typeof ETypes];
  }

  function filterByType(): void {
    if (!getInputRefValue().trim()) return;
    actionsByType[type.current]();
  }

  function resetLists(): void {
    if (getInputRefValue().trim()) return;
    dispatch(firstCharacters());
    dispatch(firstEpisodes());
    dispatch(firstLocations());
  }

  return (
    <div className="w-full flex flex-col gap-3 md:max-w-[500px]">
      <label
        className={`field-group group group-row ${
          notFound && "field-group-error"
        }`}
        // @ts-expect-error Custom props
        message={notFound ? "No results found" : ""}
      >
        <select onChange={changeType} className="input group-item max-w-fit">
          <FilterSearch.OptionsTypes />
        </select>

        <input
          ref={inputRef}
          onBlur={resetLists}
          type="search"
          className="input group-item w-1"
          placeholder="Enter Keyword"
        />
      </label>
      <button
        onClick={filterByType}
        className="btn btn-solid-primary group-item"
      >
        Search
      </button>
    </div>
  );
}

FilterSearch.OptionsTypes = function OptionsTypes() {
  return Object.entries(ETypes).map((typeArr) => {
    if (!isNaN(Number(typeArr[0]))) return;

    return (
      <option key={typeArr[1]} value={typeArr[1]}>
        {typeArr[0]}
      </option>
    );
  });
};