const https = require("https");

const BASE_URL = "https://api.agify.io/?";
const NAMES = ["victor", "milson", "gabriela", "patricia", "wagner", "brenda"];

function buildUrl(country) {
  const queryNames = NAMES.map((name) => `name[]=${name}`).join("&");
  const countryParam = country ? `&country_id=${country}` : "";
  return `${BASE_URL}${queryNames}${countryParam}`;
}

function printData(data) {
  for (let index = 0; index < data.length; index++) {
    console.log("Nome:", data[index].name);
    console.log("Idade média:", data[index].age);
    console.log("Quantidade de registros:", data[index].count);
    console.log("-----------------------");
  }
}

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

doRequest("BR");