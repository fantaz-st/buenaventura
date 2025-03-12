import classes from "./Button.module.css";

const Button = ({ children, variant = "gold" }) => (
  <button className={`${classes.button} ${classes[variant]}`} data-after={children}>
    <p>{children}</p>
  </button>
);

export default Button;
