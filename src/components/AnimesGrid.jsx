import { AnimeCard } from "./AnimeCard";
import style from "./AnimesGrid.module.css";
import { useEffect} from "react";
import { useState } from "react";
import { Spinner } from "./Spinner";

export function AnimesGrid({estado}){
    
    const [animesL,setAnimes] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true);
        fetch("https://api.jikan.moe/v3/user/Luizzz8/animelist/"+estado).then(result => result.json()).then(data=>{
            setIsLoading(false);
            setAnimes(data.anime);
        });
    },[estado]);

    if (isLoading) {
        return <Spinner/>
    }

    return (
            <ul className={style.animeGrid}>
                {animesL.map((serie) =>(
                    <AnimeCard key={serie.mal_id} serie={serie}/>
                ))}
            </ul>
    );
}