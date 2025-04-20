import classes from "./TheButton.module.css";

const TheButton = ({ variant = "lite", children, size = "medium" }) => {
  const variantClass = variant === "dark" ? classes.dark : classes.lite;
  const sizeClass = classes[size] || ""; // expects size values like 'small', 'medium', 'large' to match class names

  return (
    <a href='#' className={`${classes.btn} ${variantClass}`}>
      <span className={`${classes.btnText} ${sizeClass}`}>{children}</span>
    </a>
  );
};

export default TheButton;
