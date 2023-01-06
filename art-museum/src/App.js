import harvardArt from "./data/havardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import { NavLink } from "react-router-dom";


function App() {
  return (
    <div>
      <NavLink exact to='/'>
        Home
      </NavLink>

      <NavLink exact to='/gallery'>
      <GalleryNavigation galleries={harvardArt.records} />
      </NavLink>
    </div>
  );
}

export default App;
