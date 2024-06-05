
import GithubLink from "./GithubLink";
import DarkMode from "./DarkMode";

import FilterSearch from "./FilterSearch";
import FavoriteButton from "./FavoriteButton";

import logo from "/logo.svg";
// import home from "/bg-home.png";
import banner from "../../public/rickmorty.png";

export default function HomeSection() {
  return (
    <section id="home" className="flex flex-wrap gap-10">
      <header className="w-full flex justify-between items-center z-10">
        <img
          loading="lazy"
          src={logo}
          alt="Rick and Morty Logo"
          className="w-36"
        />

        <div className="flex items-center gap-5">
          <FavoriteButton className="max-md:hidden" />
          <hr className="max-md:!hidden vertical !h-[30px]" />
          <DarkMode />
          <GithubLink />
    
        </div>
      </header>
      <article className="w-full md:w-1/2 flex flex-col justify-center gap-8 my-12">
        <h1 className="text-4xl font-bold">
          You can search your  <span className="text-4xl text-theme">Character  Episode</span>{" "}
         <span className="text-4xl text-theme">Location </span> Here
        </h1>

        <p className="text-base text-secondary">
          Enter Details about the Ricky and Morty, episodes and even planets.
        </p>

        <div className="flex gap-5">
          <FilterSearch />
        </div>
      </article>
      <aside className="max-md:hidden flex justify-center items-center flex-1">
        <img
          loading="lazy"
          src={banner}
          alt="Rick and Morty art"
          className="absolute w-[300px] -top90 pl-10"
        />
      </aside>
    </section>
  );
}