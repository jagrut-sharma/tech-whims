import classes from "./App.module.css";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <>
      <nav className={classes.nav}>
        <h1 className={classes.title}>Tech Whims</h1>

        <form action="#" className={classes["search-bar"]}>
          <button className={classes["search-btn"]}>
            <FiSearch size="2rem" />
          </button>

          <input
            type="text"
            name="search-bar"
            id="search-bar-input"
            placeholder="Search Products"
          />
        </form>
      </nav>
    </>
  );
}

export default App;
