import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import classes from "./BoatSpecs.module.css";

const specs = [
  ["Name", "Buenaventura"],
  ["Model", "Felix 37"],
  ["Type", "Motor Speedboat"],
  ["Overall Length", "12m"],
  ["Overall Width", "3.85m"],
  ["Chasis", "Aluminium"],
  ["Engine", "Cummins QSB7 for Marine"],
  ["Horsepower", "500 HP"],
  ["Fuel Type", "Diesel"],
  ["Fuel Tank Size", "2x400l"],
  ["Cruising Speed", "25 knots"],
  ["Max Speed", "30 knots"],
  /*   ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''],
    ['',''], */
];

export default function BoatSpecs() {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <AnimatedText>
          <h1 className={classes.title}>Specs</h1>
        </AnimatedText>
        <AnimatedText>
          <p className={classes.subTitle}>Here's how to measure awesome.</p>
        </AnimatedText>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <tbody className={classes.body}>
              {specs.map(([label, value], index) => (
                <tr key={index} className={classes.row}>
                  <td>
                    <p className={classes.label}>{label}</p>
                  </td>
                  <td>
                    <p className={classes.value} dangerouslySetInnerHTML={{ __html: value }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
