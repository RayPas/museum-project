import { NavLink } from "react-router-dom";

const GalleryNavigation = ({ galleries }) => {
  return (
    <>
      <h1>Galleries</h1>
      <nav>
        {galleries.map((gallery) => (
          <NavLink key={gallery.id} to={`/gallery/${gallery.id}`}>
            {gallery.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default GalleryNavigation;
