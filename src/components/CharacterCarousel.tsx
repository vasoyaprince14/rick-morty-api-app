
// import CharacterCard from "./CharacterCard";
// import { ICharacters } from "../store";
// import { Link } from "react-router-dom";

// export default function CharacterCarousel(props: { characters: ICharacters }) {
//   return (
//     <section id="characters" className="relative">
//       <header className="flex justify-between items-center py-4">
//         <a href="#home" className="text-xl font-bold flex items-center">
//           <i className="bi-search text-base mr-2"></i>
//           Characters
//         </a>
//         <Link to="/characters" className="btn btn-white flex items-center">
//           See all <i className="bi-chevron-right ml-2"></i>
//         </Link>
//       </header>
//       <article className="overflow-x-auto snap-x snap-mandatory">
//         <div className="flex gap-5 w-auto py-5">
//           {props.characters.map((character) => {
//             return (
//               <CharacterCard
//                 key={character.id}
//                 className="snap-center sm:snap-start w-full max-w-[250px] min-w-[250px]"
//                 character={character}
//               />
//             );
//           })}
//         </div>
//       </article>
//     </section>
//   );
// }

import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import { ICharacters } from "../store";
import { Link } from "react-router-dom";

export default function CharacterCarousel(props: { characters: ICharacters }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const charactersList = props.characters.map((character) => (
    <CharacterCard
      key={character.id}
      className="snap-center sm:snap-start w-full max-w-[250px] min-w-[250px]"
      character={character}
    />
  ));

  return (
    <section id="characters" className="relative">
      <header className="flex justify-between items-center py-4">
        <a href="#home" className="text-xl font-bold flex items-center">
          <i className="bi-search text-base mr-2"></i>
          Characters
        </a>
        <Link
          to="/characters"
          className={`btn btn-white flex items-center ${imagesLoaded ? "" : "pointer-events-none"}`}
        >
          {imagesLoaded ? (
            <>
              See all <i className="bi-chevron-right ml-2"></i>
            </>
          ) : (
            "Loading..."
          )}
        </Link>
      </header>
      <article className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-5 w-auto py-5">
          {charactersList}
        </div>
      </article>
      <div style={{ display: "none" }}>
        {props.characters.map((character) => (
          <img
            key={character.id}
            src={character.image} // Assuming character.image is the image URL
            onLoad={handleImageLoad}
            alt={character.name} // Assuming character.name is the name of the character
          />
        ))}
      </div>
    </section>
  );
}
