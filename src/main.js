const doRequest = require("./api/request");
const printData = require("./utils/printData");

async function main(names, country) {
  const data = await doRequest(names, country);

  if (data) {
    printData(data);
  } else {
    console.log("Nenhum dado retornado.");
  }
}

module.exports = main;
