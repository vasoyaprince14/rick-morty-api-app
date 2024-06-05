
import CharacterCard from "./CharacterCard";
import { useAppSelector } from "../store";

export default function CharacterList() {
  const characters = useAppSelector((state) => state.character.characters);
  return (
    <article className="flex flex-wrap gap-6 justify-start">
      {characters.map((character) => {
        return (
          <CharacterCard
            className="w-[250px] h-[400px] sm:w-[260px] sm:h-[380px]"
            key={character.id}
            character={character}
          />
        );
      })}
    </article>
  );
}
