const https = require("https");
const buildUrl = require("../utils/buildUrl");
const printData = require("../utils/printData");

function doRequest(country) {
  const url = buildUrl(country);

  https
    .get(url, (res) => {
      if (res.statusCode === 200) {
        let body = "";

        res.on("data", (chunk) => {
          body += chunk;
        });

        res.on("end", () => {
          try {
            const json = JSON.parse(body);
            printData(json);
          } catch (err) {
            console.error("Erro ao parsear resposta:", err.message);
          }
        });
      } else {
        console.error("Erro na requisição. Status:", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("Erro de conexão:", e.message);
    });
}

module.exports = doRequest;
