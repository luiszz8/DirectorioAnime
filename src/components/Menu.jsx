import './Menu.css';
import style from "./Menu.module.css";

import {Link as Ancla} from "react-scroll";
import {Link} from "react-router-dom";



export function Menu(){
    return(
        <div>
            <input type="checkbox" id="btn-nav" className="checkbox"></input>
            <header>
                <div className="header-container">
                    
                    <label htmlFor="btn-nav" className="btn-label">
                    <div className="header-button"></div>
                    </label>
                </div>
            </header>
                <nav className="menu">
                <ul>
                    <li className={style.etiquetaLi}><Ancla className={style.etiquetaA} to="top" smooth={true} duration={1000} onClick={cerrar}>Anime Top</Ancla> </li>
                    <li className={style.etiquetaLi}><Ancla className={style.etiquetaA} to="watching" smooth={true} duration={1000} onClick={cerrar}>Watching</Ancla> </li>
                    <li className={style.etiquetaLi}><Ancla className={style.etiquetaA} to="plan" smooth={true} duration={1000} onClick={cerrar}>Plan To Watch</Ancla> </li>
                    <li className={style.etiquetaLi}><Ancla className={style.etiquetaA} to="onhold" smooth={true} duration={1000} onClick={cerrar}>On Hold</Ancla> </li>
                    <li className={style.etiquetaLi}><Link className={style.etiquetaA} to="/completed" >Completed</Link> </li>
                </ul>      
                </nav>
        </div>
    );
}

function cerrar(){
    if (document.readyState==="complete") {
        document.getElementById("btn-nav").checked=false
    }
}