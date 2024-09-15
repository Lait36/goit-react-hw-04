import css from "./ImageCard.module.css";

export default function ImageCard({ item, onImageClick }) {
  const handleClick = (e) => {
    e.preventDefault();  // Чтобы предотвратить переход по ссылке
    if (onImageClick) {   // Проверяем, что функция передана
      onImageClick(item); // Вызываем функцию с данными изображения
    }
  };

  return (
    <div className={css.container}>
      <a href={item.urls.full} className={css.link} onClick={handleClick}>
        <img src={item.urls.regular} alt={item.alt_description || "Image"} className={css.img} />
      </a>
    </div>
  );
}
