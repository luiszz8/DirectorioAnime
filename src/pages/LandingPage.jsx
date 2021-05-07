import { AnimesGrid } from "../components/AnimesGrid";
import { Estado } from "../components/Estado";

export function LandingPage(){
    return(
        <div>
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