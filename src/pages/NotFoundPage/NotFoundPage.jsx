import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return 
    <div>
      <p className={css.notFound}>Uh-oh! The page you're trying to reach seems to be missing. Why not explore our app to find some awesome movies instead?</p>
      <Link className={css.goHome} to="/">
        Go Home 
      </Link>
    </div>
  
};

export default NotFoundPage;