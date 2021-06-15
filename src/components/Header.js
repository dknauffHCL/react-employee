import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="navbar narbar-light bg-light">
      <h1 style={headingStyle}>{title}</h1>
      <Button text="Add" bootStrap="btn btn-success" onClick={onClick} />
      <Button text="Update" bootStrap="btn btn-primary" onClick={onClick} />
      <Button text="Delete" bootStrap="btn btn-danger" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Employee Generic Title",
};

Header.propTypes = {
  // robustness, will warn in console
  title: PropTypes.string,
};

const headingStyle = {
  // css in JS
  color: "red",
};

export default Header;
