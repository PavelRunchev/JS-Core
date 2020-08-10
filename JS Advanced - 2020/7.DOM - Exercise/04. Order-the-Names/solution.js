function solve() {
  const alphabeticaly = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let dataBase = document.querySelectorAll("#exercise div ol li");
  document
    .querySelector("#exercise article button")
    .addEventListener("click", addStudentName);

  function addStudentName(e) {
    e.preventDefault();
    let name = document.querySelector("#exercise input");
    if (name.value === '') return;

    const capName =
      name.value.charAt(0).toUpperCase() + name.value.slice(1).toLowerCase();
    const index = alphabeticaly.findIndex((a) => a === capName[0]);
    let getNamesFromDataBase = dataBase[index].textContent
      .split(', ')
      .filter((n) => n !== '');
    getNamesFromDataBase.push(capName);
    dataBase[index].textContent = getNamesFromDataBase.join(', ');

    name.value = '';
  }
}