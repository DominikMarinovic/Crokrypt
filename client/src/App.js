import Navbar from "./components/Navbar.js";
import Welcome from "./components/Welcome.js";
import Footer from "./components/Footer.js";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App_header}>
      <div className={classes.gradient_bg_welcome}>
        <Navbar />
        <Welcome />
        <Footer />
      </div>
    </div>
  );
};

export default App;
