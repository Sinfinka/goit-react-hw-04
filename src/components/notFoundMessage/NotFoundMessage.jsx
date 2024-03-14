import css from "./NotFoundMessage.module.css";

function NotFoundMessage() {
  return (
    <div className={css.text}>
      <p>
        ❌Your search did not match any images. <br /> Please make sure the
        entered data is correct and try again.
      </p>
    </div>
  );
}

export default NotFoundMessage;
