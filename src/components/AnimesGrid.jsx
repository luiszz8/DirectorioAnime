import { AnimeCard } from "./AnimeCard";
import style from "./AnimesGrid.module.css";
import { useEffect} from "react";
import { useState } from "react";

export function AnimesGrid({estado}){
    
    const [animesL,setAnimes] = useState([]);
    
    useEffect(()=>{
        fetch("https://api.jikan.moe/v3/user/Luizzz8/animelist/"+estado).then(result => result.json()).then(data=>{
            setAnimes(data.anime);
        });
    },[estado]);

    return (
            <ul className={style.animeGrid}>
                {animesL.map((serie) =>(
                    <AnimeCard key={serie.mal_id} serie={serie}/>
                ))}
            </ul>
    );
}