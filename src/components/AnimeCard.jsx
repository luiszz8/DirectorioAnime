import { Link } from "react-router-dom";
import style from "./AnimeCard.module.css";

export function AnimeCard({serie}){
    return (
        <li className={style.animeCard}>
            <Link to={"/anime/" +serie.mal_id}>
                <img width={235} height={318} className={style.animeI} src={serie.image_url} alt={serie.title}/>
                <div>{serie.title}</div>
            </Link>
        </li>
        );
}