import './Menu.css';
import style from "./Menu.module.css";
import {Link} from "react-router-dom";



export function MenuSalto(){
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
                    <li className={style.etiquetaLi}><Link className={style.etiquetaA} onClick={cerrar} to={{ pathname: '/', hash:'#plan'}}>Watching</Link> </li>
                    <li className={style.etiquetaLi}><Link className={style.etiquetaA} to="plan"  onClick={cerrar}>Plan To Watch</Link> </li>
                    <li className={style.etiquetaLi}><Link className={style.etiquetaA} to="onhold" onClick={cerrar}>On Hold</Link> </li>
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