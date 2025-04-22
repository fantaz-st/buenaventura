import classes from "./TheButton.module.css";

{
  /* <TheButton href="/tours" variant="dark">
  View Tours
</TheButton>
 */
}

{
  /* <TheButton as="button" onClick={() => alert("Clicked!")}>
  Book Now
</TheButton> */
}

const TheButton = ({ as = "a", variant = "lite", children, size = "medium", href = "#", onClick, type = "button", target, rel, ...restProps }) => {
  const variantClass = variant === "dark" ? classes.dark : classes.lite;
  const sizeClass = classes[size] || "";
  const classNames = `${classes.btn} ${variantClass}`;

  const content = <span className={`${classes.btnText} ${sizeClass}`}>{children}</span>;

  if (as === "button") {
    return (
      <button type={type} onClick={onClick} className={classNames} {...restProps}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} target={target} rel={rel} className={classNames} {...restProps}>
      {content}
    </a>
  );
};

export default TheButton;
