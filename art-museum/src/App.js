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

      <Route exact path="/">
        <h2>Harvard Art Museum</h2>
        <p>
          Look, but Don't Touch. Please select a gallery in the navigation bar
        </p>
      </Route>
      <Route path="/gallery">
        <GalleryNavigation galleries={harvardArt.records} />
      </Route>
      <Route path="/gallery/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>
      <Route path="page-not-found">
        <h1>Page not found</h1>
      </Route>
    </div>
  );
}

export default App;
