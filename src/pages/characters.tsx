import GenericSection from "../components/GenericSection";
import CharacterPagination from "../components/CharacterPagination";

export default function CharactersPage() {
  return (
    <>
      <GenericSection>
        All the information on Rick and Morty's most beloved characters
      </GenericSection>
      <CharacterPagination />
    </>
  );
}
