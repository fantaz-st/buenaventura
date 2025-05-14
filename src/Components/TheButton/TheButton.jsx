import classes from "./TheButton.module.css";

const TheButton = ({ as = "a", variant = "lite", size = "medium", href = "#", onClick, type = "button", target, rel, changeOnSmartphones = false, children, ...rest }) => {
  const variantClass = variant === "dark" ? classes.dark : classes.lite;
  const sizeClass = classes[size] || "";
  const switchClass = changeOnSmartphones ? classes.switch : "";
  const classNames = `${classes.btn} ${variantClass} ${sizeClass} ${switchClass}`.trim();

  const Content = () => <span className={classes.btnText}>{children}</span>;

  return as === "button" ? (
    <button type={type} onClick={onClick} className={classNames} {...rest}>
      <Content />
    </button>
  ) : (
    <a href={href} onClick={onClick} target={target} rel={rel} className={classNames} {...rest}>
      <Content />
    </a>
  );
};

export default TheButton;
