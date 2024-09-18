import css from "./ImageCard.module.css";

export default function ImageCard({ item, openModal }) {


  return (
    <div className={css.container} onClick={() => openModal(item)}>
     
     <img className={css.img} src={item.urls.small} alt={item.alt_description } />
   
    </div>
  );
}
