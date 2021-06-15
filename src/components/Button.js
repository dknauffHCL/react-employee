const Button = ({ text, bootStrap, onClick }) => {
  return (
    <button onClick={onClick} className={bootStrap}>
      {text}
    </button>
  );
};

Button.defaultProps = {};

export default Button;
