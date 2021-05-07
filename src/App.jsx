import style from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AnimeDetails } from "./pages/AnimeDetails";
import { Menu } from "./components/Menu";
import { AnimesCompleted } from "./pages/AnimesCompleted";
//import { MenuSalto } from "./components/MenuSalto";

export function App(){
    return (<Router>
        
        
        
        
        <main>
        <Switch>
          <Route exact path="/">
            <Menu/> 
            <Link to="/"><h1 className={style.title}>Animes</h1></Link> 
            <LandingPage/> 
          </Route>
          <Route exact path="/anime/:animeId">
            <Link to="/"><h1 className={style.title}>Animes</h1></Link> 
            <AnimeDetails/> 
          </Route>
          <Route exact path="/completed">
            <Link to="/"><h1 className={style.title}>Animes</h1></Link> 
            <AnimesCompleted/> 
          </Route>
        </Switch>
        </main>
    </Router>);
}