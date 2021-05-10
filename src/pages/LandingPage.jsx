import { AnimesGrid } from "../components/AnimesGrid";
import { Estado } from "../components/Estado";
import { GridTopAnime } from "../components/GridTopAnime";

export function LandingPage(){
    return(
        <div>
            <section id="top"/>
                <Estado texto={"Anime Top"}/>
                <GridTopAnime/>
            <section id="watching"/>
                <Estado texto={"Watching"}/>
                <AnimesGrid estado={"watching"}/>
            <section id="plan"/>
                <Estado texto={"Plan To Watch"}/>
                <AnimesGrid estado={"plantowatch"}/>
            <section id="onhold"/>
                <Estado texto={"On Hold"}/>
                <AnimesGrid estado={"onhold"}/>
        </div>
    );
}