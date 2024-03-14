import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.text}>
      <p> ❌ Something went wrong. Please reload the page!</p>
    </div>
  );
}
