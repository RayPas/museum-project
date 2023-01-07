import harvardArt from "./data/havardArt";
import GalleryView from "./components/GalleryView/index";
import GalleryNavigation from "./components/GalleryNavigation";
import { NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink to="/gallery">Gallery</NavLink>

      <Route exact path="/"></Route>
      <Route path="/gallery">
        <GalleryNavigation galleries={harvardArt.records} />
      </Route>
      <Route path="/gallery/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
