import LocationPagination from "../components/LocationPagination";
import GenericSection from "../components/GenericSection";

export default function LocationsPage() {
  return (
    <>
      <GenericSection>
        See the craziest and strangest places in Rick and Morty
      </GenericSection>
      <LocationPagination />
    </>
  );
}
