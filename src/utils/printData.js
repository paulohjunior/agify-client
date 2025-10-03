function printData(data) {
  if (!data) {
    console.log("Nenhum dado recebido para imprimir.");
    return;
  }

  for (let index = 0; index < data.length; index++) {
    console.log("Nome:", data[index].name);
    console.log("Idade média:", data[index].age);
    console.log("Quantidade de registros:", data[index].count);
    console.log("-----------------------");
  }
}

module.exports = printData;