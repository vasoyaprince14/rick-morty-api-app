import { useParams } from "react-router-dom";
import { getLocation, useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import LocationPagination from "../components/LocationPagination";
import IconPlanet from "../components/IconPlanet";
import FavoriteIcon from "../components/FavoriteIcon";

export default function LocationPage() {
  // data
  const params = useParams();
  const dispatch = useAppDispatch();

  const location = useAppSelector((state) => state.location.location);

  // hooks
  useEffect(() => {
    document.location.href = "#body";
    dispatch(getLocation(params.id!));
  }, [dispatch, params]);

  return (
    location && (
      <>
        <PageLayout>
          <article className="flex flex-col gap-2">
            <IconPlanet className="w-10" />
            <h1 className="text-3xl font-bold md:max-w-[400px] lg:max-w-none">
              {location.name}

              <FavoriteIcon
                location={location}
                className="align-middle ml-2"
              />
            </h1>

            <aside className="flex gap-2 flex-wrap">
              <span className="badge badge-outline-primary inline-flex items-center gap-2">
                <i className="bi bi-box"></i>
                {location.dimension}
              </span>
              <span className="badge badge-white inline-flex items-center gap-2">
                <IconPlanet className="w-4 h-[22px]" />
                {location.type}
              </span>
            </aside>

            <footer className="flex text-base items-center mt-8 badge badge-outline-warn">
              <i className="bi-info-circle-fill text-base mr-3"></i>
              <span>
                <b className="font-bold">{location.residents.length}</b>{" "}
                characters located here
              </span>
            </footer>
          </article>

          <PageLayout.DefaultBanner />
        </PageLayout>

        <hr />

        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold">More Episodes</h4>
          <LocationPagination />
        </div>
      </>
    )
  );
}
