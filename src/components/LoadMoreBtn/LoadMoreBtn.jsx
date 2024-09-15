import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <div className={css.container}>
      <button onClick={loadMore} className={css.btn}>
        LoadMore
      </button>
    </div>
  );
}
