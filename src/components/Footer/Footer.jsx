import styles from "./Footer.module.css";
import { students } from "../../helpers/objects";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {students.map((student) => (
          <div key={student.id} className={styles.studentContainer}>
            <div className={styles.gradesDiv}>
              <p>
                <span>Oceny:</span>{" "}
                {student.grades.map((grade, index) => {
                  return (index ? ", " : "") + grade;
                })}
              </p>
            </div>
            <div className={styles.averageDiv}>
              <p>
                <span>Średnia:</span>
                <span
                  style={{
                    color: student.average <= 1 ? "#e84855" : "#018437",
                  }}
                >
                  {" " + student.average}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
