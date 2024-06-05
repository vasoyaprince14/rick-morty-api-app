

import  { useState } from "react";
// import { Link } from "react-router-dom";
import { ICharacter } from "../store";
import IconPlanet from "./IconPlanet";
import { HTMLAttributes } from "react";
import FavoriteIcon from "./FavoriteIcon";

interface CharacterCardElement extends HTMLAttributes<HTMLDivElement> {
  character: ICharacter;
}

export default function CharacterCard(props: CharacterCardElement) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClick = () => {
    // Add a delay before routing to the characters page
    setTimeout(() => {
      window.location.href = `/character/${props.character.id}#body`;
    }, 300); // Adjust the delay time as needed (500 milliseconds in this example)
  };

  return (
    <div className={`card relative h-fit ${props.className}`}>
      <article className="flex flex-col gap-2 card-content">
        {/* image */}
        <div className="flex rounded-md justify-center items-center h-36 overflow-hidden">
          <img
            className={`w-full h-full object-contain ${!imageLoaded ? "lazyload" : ""}`}
            loading="lazy"
            alt={props.character.name}
            src={props.character.image}
            onLoad={handleImageLoad}
          />
          {!imageLoaded && (
            <div className="w-full h-full flex justify-center items-center bg-gray-200">
              Loading...
            </div>
          )}
        </div>

        {/* header */}
        <header className="flex gap-2 justify-between items-center">
          <h4 className="font-bold text-md whitespace-nowrap text-ellipsis overflow-hidden">
            {props.character.name}
          </h4>
          <FavoriteIcon character={props.character} />
        </header>

        {/* info */}
        <article>
          <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
            <i className="bi-person mr-2"></i>
            {props.character.gender}
          </p>
          <p>
            <i className="bi-activity mr-2"></i>
            {props.character.status}
          </p>
          <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
            <i className="bi-person mr-2"></i>
            {props.character.species}
          </p>
          <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
            <IconPlanet className="w-4 inline h-fit mr-2" />
            {props.character.origin.name}
          </p>
        </article>

        <button
          onClick={handleClick}
          className="btn btn-white w-full block mt-2 text-center"
        >
          View details
        </button>
      </article>
    </div>
  );
}
