import classes from "./App.module.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Nav />
        <div className={classes.body}>
          <h1>Body</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
