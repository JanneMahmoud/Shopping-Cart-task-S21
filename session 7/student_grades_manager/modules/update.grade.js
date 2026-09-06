const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function updateGrade(id, grade) {
  if (grade === undefined) {
    console.log("Grade is missing.");
    return;
  }

  const grades = await readGrades();

  const record = grades.find((record) => record.id === Number(id));

  if (!record) {
    console.log("Record not found. Invalid ID.");
    return;
  }

  record.grade = grade;

  try {
    await saveGrades(grades);

    console.log("✅ Grade updated successfully.");
  } catch (error) {
    console.log(`Error saving updated grade: ${error.message}`);
  }
}

module.exports = updateGrade;