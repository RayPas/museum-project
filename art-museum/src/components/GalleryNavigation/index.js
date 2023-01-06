import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries);
    return (
        <>
        <h1>Galleries</h1>
        <nav>
            <NavLink exact to='/'>
            Home
            </NavLink>
            {galleries.map((gallery) => (
                <NavLink to={`/gallery/${gallery.id}`}>
                    {gallery.name}
                </NavLink>
            ))}
        </nav>
        </>
    )
}

export default GalleryNavigation;
