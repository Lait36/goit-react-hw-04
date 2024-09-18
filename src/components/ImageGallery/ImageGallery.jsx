import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ items, onImageClick  }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id} className={css.item}>
          <ImageCard item={item} openModal={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
