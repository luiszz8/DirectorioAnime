import { AnimesCompletedGrid } from "../components/AnimesCompletedGrid";
import { EstadoComplete } from "../components/EstadoComplete";

export function AnimesCompleted(){  
    return(  
      <>
        <section id="Inicio"/>
        <EstadoComplete texto={"Completed"}/>
        <AnimesCompletedGrid estado={"completed"}/>
      </>  
    );
}