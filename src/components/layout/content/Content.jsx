import StandardBtn from "../../common/standard-btn/StandardBtn";
import TextField from "../../common/text-field/TextField";
import styles from "./Content.module.css";

function Content({ children }) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <TextField label="Benutzername:" placeholder="Gib deinen Namen ein" />
      <StandardBtn />
    </div>
  );
}

export default Content;
