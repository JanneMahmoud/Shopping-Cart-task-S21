const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function deleteGrade(id) {
  const grades = await readGrades();

  const index = grades.findIndex((grade) => grade.id === id);

  if (index === -1) {
    console.log(" Invalid ID: Record not found.");
    return;
  }

  grades.splice(index, 1);

  try {
    await saveGrades(grades);

    console.log("✅ Grade deleted.");
  } catch (error) {
    console.log(`Error deleting grade: ${error.message}`);
  }
}

module.exports = deleteGrade;