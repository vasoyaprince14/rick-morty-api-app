import { useAppSelector } from "../store";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const locations = useAppSelector((state) => state.location.locations);
  return (
    <article className="flex flex-wrap gap-5 justify-start items-start">
      {locations.map((location) => {
        return (
          <LocationCard
            className="flex-[230px] sm:max-w-[300px]"
            key={location.id}
            location={location}
          />
        );
      })}
    </article>
  );
}