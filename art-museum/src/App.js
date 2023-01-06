import harvardArt from "./data/havardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import { NavLink } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <NavLink to='/gallery'>
      <GalleryNavigation galleries={harvardArt.records} />
      </NavLink>
    </div>
  );
}

export default App;
