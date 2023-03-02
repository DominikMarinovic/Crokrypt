import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.name}>
      <div className={classes.title}>CroKrypt</div>
      <div className={classes.nav}>
        <ul className={classes.list}>
          {/* <button className={classes.logBtn}>Login</button> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
