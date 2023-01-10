import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/index"

const GalleryView = ({ galleries }) => {
  // const art = galleries.map(images => images.url.toString())
  const { galleryId } = useParams();
  const title = galleries.find((id) => {
    const numberToMatch = id.id.toString();
      if(galleryId === numberToMatch){
        return id.name;
      }
    })


console.log(galleries)
  return (
  <div>
    {title && <h1>{title.name}</h1>}
    {/* <ArtImageTile art={art} /> */}
  </div>
  )
};

export default GalleryView;
