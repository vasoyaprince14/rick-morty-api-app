import { Link } from "react-router-dom";
import { ILocations } from "../store";
import LocationCard from "./LocationCard";

export default function LocationCarousel(props:{locations:ILocations}) {
  
  return (
    <section id="locations" className="relative">
      <header className="flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <i className="bi-search text-base mr-2"></i>
          Locations
        </a>
        <Link to="/locations" className="btn btn-white">
          See all <i className="bi-chevron-right"></i>
        </Link>
      </header>
      <article className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-5 w-auto py-5">
          {props.locations.map((location) => {
            return (
              <LocationCard
                className="snap-center sm:snap-start flex flex-col items-center  w-full max-w-[250px] min-w-[250px]"
                key={location.id}
                location={location}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}