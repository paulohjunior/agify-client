const buildUrl = require("../utils/buildUrl");

async function doRequest(names, country) {
  const url = buildUrl(names, country);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data; // só retorna dados crus
  } catch (err) {
    console.error("Erro na requisição:", err.message);
    return null;
  }
}

module.exports = doRequest;