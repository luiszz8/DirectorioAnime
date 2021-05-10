import { AnimeCard } from "./AnimeCard";
import style from "./AnimesGrid.module.css";
import { useEffect} from "react";
import { useState } from "react";
import { Spinner } from "./Spinner";


export function AnimesCompletedGrid({estado}){
    
    const [animesL,setAnimes] = useState([]);
    const [currentPage,setCurrentPage] = useState(0);
    const [isLoading,setIsLoading] = useState(true);

    const filteredAnimes = () => {
        return animesL.slice(currentPage,currentPage+8);
    }

    const nextPage = () => {
        if (animesL.length>currentPage+8) {
            setCurrentPage(currentPage+8);
            window.scrollTo(0,0);    
        }
    }

    const previusPage = () => {
        if (currentPage>0) {
            setCurrentPage(currentPage-8);
            window.scrollTo(0,0);    
        }
    }   

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
    if (!animesL) {
        return null;
    }
    return (
        <>
            <ul className={style.animeComplete}>
                {filteredAnimes().map((serie) =>(
                    <AnimeCard key={serie.mal_id} serie={serie}/>
                ))}
            </ul>
            <div className={style.contenerBoutton}>
                <button className={style.estiloBoton} onClick={previusPage}>Previus</button>
                <button className={style.estiloBoton} onClick={nextPage}>Next</button>
            </div>
            <br />
        </>
    );
}