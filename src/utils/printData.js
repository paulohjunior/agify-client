function printData(data) {
  for (let index = 0; index < data.length; index++) {
    console.log("Nome:", data[index].name);
    console.log("Idade média:", data[index].age);
    console.log("Quantidade de registros:", data[index].count);
    console.log("-----------------------");
  }
}

module.exports = printData;