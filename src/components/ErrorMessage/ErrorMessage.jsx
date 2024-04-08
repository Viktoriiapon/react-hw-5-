import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div>
      <p className={css.errorMessage}>
       Please reload the page!
      </p>
    </div>
  );
};

export default ErrorMessage;