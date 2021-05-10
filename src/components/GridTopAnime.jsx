import { AnimeCard } from "./AnimeCard";
import style from "./AnimesGrid.module.css";
import animesL from "./animesList.json"; 

export function GridTopAnime(){
    
    const lista = animesL.anime.filter(animeA => animeA.score >9);
    return (
            <ul className={style.animeGrid}>
                {lista.map((serie) =>(
                    <AnimeCard key={serie.mal_id} serie={serie}/>
                ))}
            </ul>
    );
}