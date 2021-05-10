import { useState } from "react";
import { useEffect} from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import style from "./AnimeDetails.module.css";

export function AnimeDetails(){
    const {animeId} = useParams();
    const [animeD,setAnime] = useState([]); 
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true);
        fetch("https://api.jikan.moe/v3/anime/"+animeId).then(result => result.json()).then(data=>{
            setIsLoading(false);
            setAnime(data);
        });
    },[animeId]);

    if (isLoading) {
        return <Spinner/>
    }

    if (!animeD.genres) {
        return null;
    }
    console.log(animeD);   
    return <div className={style.detailsContainer}>
        <img className={style.col + " " + style.animeImage} src={animeD.image_url} alt={animeD.title}/>
        <div className={style.col + " " + style.animeDetails}>
            <p className={style.firstItem}> <strong>Title:</strong> {animeD.title}</p>
            <p><strong>Genres:</strong> {animeD.genres.map(genre=>genre.name).join(", ")}</p>
            <p> <strong>Description:</strong> {animeD.synopsis}</p>
        </div>
    </div>
}