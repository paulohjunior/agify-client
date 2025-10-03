const doRequest = require("./api/request");
const printData = require("./utils/printData");

const NAMES = ["victor", "milson", "gabriela", "patricia", "wagner", "brenda"];

(async () => {
  const data = await doRequest(NAMES, "BR");
  printData(data);
})();
