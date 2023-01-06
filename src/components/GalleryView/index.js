import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const idk = galleries.find((id) => {
    if (id === galleryId) {
      return true;
    }
    return false;
  });

  console.log(idk);
  return <div></div>;
};

export default GalleryView;
