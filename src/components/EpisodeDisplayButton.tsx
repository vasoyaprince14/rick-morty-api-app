// import { useParams,Link } from "react-router-dom";
// import { IEpisodes } from "../store";
// import { getEpisode, useAppDispatch, useAppSelector } from "../store";
// import OrganismEpisodeCard from "./EpisodeCard";
// // import { useEffect } from "react";
// import Episode from "../store/episode";
// // import EpisodeCard from "./EpisodeCard";
// import FavoriteIcon from "./FavoriteIcon";
// import episode from "../store/episode";
// import EpisodeCarousel from "./EpisodeCarousel";

// export default function EspisodeDisplayButton(props) {
//   // const params = useParams();
//   // const dispatch = useAppDispatch();

//   // const props= useAppSelector((state) => state.episode.episode);

//   // useEffect(() => {
//   //   // document.location.href = "#body";
//   //   dispatch(getEpisode(id));
//   // }, [dispatch, id]);
  
//     // console.log("orginiwsm episode card started")
//     // const episodes = useAppSelector((state) => state.episode.episodes);
//     // const params = useParams();
//     // const dispatch = useAppDispatch();
//     (async(id:string)=>{
//       return (
//         await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
//       ).json();
//     })('5');

//     return (
//       <>
//       {props.id}
//       {/* <EpisodeCard episode={id}></EpisodeCard> */}

//       </>
//     );
//   }
import  { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';

export default function EpisodeDisplayButton (props:any)  {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const episodeIds = props.ep; // Example episode IDs
console.log(props)
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const fetchedEpisodes = await Promise.all(
          episodeIds.map(async (id:any) => {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
            if (!response.ok) {
              throw new Error(`Error fetching episode ${id}`);
            }
            const data = await response.json();
            return data;
          })
        );
        setEpisodes(fetchedEpisodes);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  useEffect(() => {
    episodes.forEach((episode) => {
      console.log(episode);
    });
  }, [episodes]);

  return (
   
    <>
    <div className=' flex flex-row gap-6 flex-wrap justify-start'>
    {episodes.map((episode) => (
        // <div key={episode.id}>
        //   <h2>{episode.name}</h2>
        //   <p>{episode.air_date}</p>
        //   <p>{episode.episode}</p>
        // </div>
        <EpisodeCard
        className="snap-center sm:snap-start max-w-[250px] min-w-[250px]"
        key={episode.id}
        episode={episode}
      />
      // <h1>{episode.id}</h1>

      ))}
    </div>
    </>
   
    // <div className="flex flex-col gap-6">
    //       <h4 className="text-xl font-bold">More Characters</h4>
    //       {episodes.map((episode) => (
    //     // <div key={episode.id}>
    //     //   <h2>{episode.name}</h2>
    //     //   <p>{episode.air_date}</p>
    //     //   <p>{episode.episode}</p>
    //     // </div>
    //     <EpisodeCard
    //     className="snap-center sm:snap-start w-full max-w-[250px] min-w-[250px]"
    //     key={episode.id}
    //     episode={episode}
    //   />
    //   ))}
    //     </div>
      
      
    
  );
};

