import student from "../assets/student.jpeg";

export const students = [
  {
    id: "1",
    firstName: "Andrzej",
    lastName: "Kowalski",
    class: "4TEP",
    grades: [4, 4, 4, 1, 1, 1],
    get average() {
      let avg = 0;
      for (let i = 0; i < this.grades.length; i++) {
        avg = avg + this.grades[i];
      }
      avg = avg / this.grades.length;
      return avg.toFixed(2);
    },
    // average: "3,33",
    img: student,
  },
];
