import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const title = galleries.find((id) => {
    const numberToMatch = id.id.toString();
      if(galleryId === numberToMatch){
        return id.name;
      }
    })


console.log('')
  return (
  <div>
    {title && <h1>{title.name}</h1>}
  </div>
  )
};

export default GalleryView;
