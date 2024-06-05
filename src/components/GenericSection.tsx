import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import logo from "/logo.svg";
import banner from "/rickmorty.png";
import FavoriteButton from "./FavoriteButton";

export default function TemplateGenericSection(
  props: PropsWithChildren<{ isFavoritePage?: boolean }>
) {
  return (
    <section id="generic" className="relative flex flex-wrap gap-10">
      <header className="w-full flex flex-col gap-10 z-10">
        <div className="flex justify-between gap-10">
          <Link to="/" className="btn btn-white w-fit">
            <i className="bi-chevron-left mr-2"></i>
            Back
          </Link>

          {!props.isFavoritePage && <FavoriteButton />}
        </div>
        <img
          loading="lazy"
          src={logo}
          alt="Rick and Morty Logo"
          className="w-36"
        />
      </header>
      <article className="w-full md:w-1/2 flex flex-col justify-center gap-8 mb-12">
        <h1 className="text-4xl font-bold">
          Everthing at  <span className="text-4xl text-theme"> one</span>{" "}
          place
        </h1>

        <p className="text-base text-secondary">{props.children}</p>
      </article>
      <aside className="max-md:hidden flex justify-center items-center flex-1">
        <img
          loading="lazy"
          src={banner}
          alt="Rick and Morty art"
          className="absolute w-[350px] -top-100 pl-4"
        />
      </aside>

      <a
        href="#body"
        className="bi-chevron-up btn btn-white opacity-80 !py-3 rounded-full fixed bottom-10 right-10 z-20"
      ></a>
    </section>
  );
}