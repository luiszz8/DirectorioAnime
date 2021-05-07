import style from "./EstadoComplete.module.css";

export function EstadoComplete({texto}){
    return(
        <div className={style.textoSub}>
            <h2>{texto}</h2>
        </div>
    );
}