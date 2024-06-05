import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICharacter } from "../store";
import IconPlanet from "./IconPlanet";
import { HTMLAttributes } from "react";
import FavoriteIcon from "./FavoriteIcon";

interface CharacterCardElement extends HTMLAttributes<HTMLDivElement> {
  character: ICharacter;
}

export default function CharacterCard(props: CharacterCardElement) {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (!isNavigating) {
      setIsNavigating(true);
      setTimeout(() => {
        navigate(`/character/${props.character.id}`);
      }, 300); // 300 milliseconds delay
    }
  };

  return (
    <div className={`card relative h-fit ${props.className}`}>
      <article className="flex flex-col gap-2 card-content">
        {/* image */}
        <div className="flex rounded-md justify-center items-center h-36 overflow-hidden">
          <img
            loading="lazy"
            alt={props.character.name}
            src={props.character.image}
            className="w-full h-full object-cover"
          />
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

        <Link
          to={`/character/${props.character.id}`}
          onClick={handleLinkClick}
          className="btn btn-white w-full block mt-2 text-center"
        >
          View details
        </Link>
      </article>
    </div>
  );
}

// import { Link } from "react-router-dom";
// import { ICharacter } from "../store";
// import IconPlanet from "./IconPlanet";
// import { HTMLAttributes } from "react";
// import FavoriteIcon from "./FavoriteIcon";

// interface CharacterCardElement extends HTMLAttributes<HTMLDivElement> {
//   character: ICharacter;
// }

// export default function CharacterCard(props: CharacterCardElement) {
//   return (
//     <div className={`card relative h-fit ${props.className}`}>
//       <article className="flex flex-col gap-2 card-content">
//         {/* image */}
//         <div className="flex rounded-md justify-center items-center h-36 overflow-hidden">
//           <img
//             loading="lazy"
//             alt={props.character.name}
//             src={props.character.image}
//           />
//         </div>

//         {/* header */}
//         {/* <Link
//           to={`/character/${props.character.id}`}
//           className="btn btn-white w-full block mt-2 text-center"
//         > */}
//           <header className="flex gap-2 justify-between items-center">
//           <h4 className="font-bold text-md whitespace-nowrap text-ellipsis overflow-hidden">
//             {props.character.name}
//           </h4>
//           <FavoriteIcon character={props.character} />
//         </header>

    

//         {/* info */}
//         <article>
//         <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
//             <i className="bi-person mr-2"></i>
//             {props.character.gender}
//           </p>
//           <p>
//             <i className="bi-activity mr-2 "></i>
//             {props.character.status}
//           </p>
//           <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
//             <i className="bi-person mr-2"></i>
//             {props.character.species}
//           </p>
//           <p className="w-full text-ellipsis overflow-hidden whitespace-nowrap">
//             <IconPlanet className="w-4 inline h-fit mr-2" />
//             {props.character.origin.name}
//           </p>
//         </article>

//         <Link
//           to={`/character/${props.character.id}`}
//           className="btn btn-white w-full block mt-2 text-center"
//         >
//           View details
//         </Link>
//       </article>
//     </div>
//   );
// }
