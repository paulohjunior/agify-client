const doRequest = require("./api/request");
const printData = require("./utils/printData");

(async () => {
  const data = await doRequest("BR");
  printData(data);
})();
