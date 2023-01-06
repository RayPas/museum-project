import { NavLink } from "react-router-dom";


const GalleryNavigation = ({ galleries }) => {
    console.log(galleries);
    return (
        <nav>
            {galleries.map((gallery) => (
                <NavLink to={`/gallery/${gallery.id}`}>
                    {gallery.name}
                </NavLink>
            ))}
        </nav>
    )
}

export default GalleryNavigation;
