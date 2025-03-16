import classes from "./Tours.module.css";

const Tours = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>We organize four</h1>
        <h1 className={classes.rotated}>insane tours</h1>
        <h1>unmatched value</h1>
      </div>
      <div className={classes.cards}>
        <div className={classes.card}>
          <h1>1</h1>
        </div>
        <div className={classes.card}>
          <h1>2</h1>
        </div>
        <div className={classes.card}>
          <h1>3</h1>
        </div>
      </div>
    </div>
  );
};

export default Tours;
