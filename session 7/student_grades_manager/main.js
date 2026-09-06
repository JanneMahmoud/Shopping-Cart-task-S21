const readGrades = require("./modules/read.grades");
const addGrade = require("./modules/add.grade");
const deleteGrade = require("./modules/delete.grade");
const updateGrade = require("./modules/update.grade");

async function main() {
  console.log(await readGrades());

  await addGrade("Mona", "Chemistry", 97);
  console.log(await readGrades());

  await deleteGrade(4);
  console.log(await readGrades());

  await updateGrade(2, 95);
  console.log(await readGrades());
}

main();