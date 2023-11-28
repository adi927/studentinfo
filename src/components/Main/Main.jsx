import styles from "./Main.module.css";
import { students } from "../../helpers/objects";

const Main = () => {
  return (
    <div className={styles.main}>
      {students.map((student) => (
        <div className={styles.container} key={student.id}>
          {students.map((student) => (
            <div className={styles.imgDiv} key={student.id}>
              <img src={student.img} alt="img"></img>
            </div>
          ))}

          <div className={styles.infoDiv}>
            {students.map((student) => (
              <div className={styles.studentsInfo} key={student.id}>
                <div className={styles.nameDiv}>
                  <p>
                    <span className={styles.red}>Imie:</span>{" "}
                    {student.firstName}
                  </p>
                </div>
                <div className={styles.lastDiv}>
                  <p>
                    <span className={styles.red}>Nazwisko: </span>
                    {student.lastName}
                  </p>
                </div>
                <div className={styles.classDiv}>
                  <p>
                    <span className={styles.red}>Klasa:</span> {student.class}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
