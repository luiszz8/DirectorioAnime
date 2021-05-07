import style from "./Estado.module.css";

export function Estado({texto}){
    return(
        <div className={style.textoSub}>
            <h2>{texto}</h2>
        </div>
    );
}