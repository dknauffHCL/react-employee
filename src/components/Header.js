import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="navbar narbar-light bg-light">
      <h1 style={headingStyle}>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Close" : "Add"}
          bootStrap={showAdd ? "btn btn-danger" : "btn btn-success"}
          onClick={onAdd}
        />
      )}
      {/* <Button text="Update" bootStrap="btn btn-primary" onClick={onClick} />
      <Button text="Delete" bootStrap="btn btn-danger" onClick={onClick} /> */}
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
};

export default Header;
