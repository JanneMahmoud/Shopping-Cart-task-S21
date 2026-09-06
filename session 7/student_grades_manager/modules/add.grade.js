const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function addGrade(student, subject, grade) {
  if (!student || !subject || grade === undefined) {
    console.log("Invalid Grade Data");
    return;
  }

  try {
    const grades = await readGrades();

    const record = {
      id: grades.length + 1,
      student,
      subject,
      grade,
    };

    grades.push(record);

    await saveGrades(grades);

    console.log("Grade added successfully.");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

module.exports = addGrade;