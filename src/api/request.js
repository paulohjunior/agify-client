const buildUrl = require("../utils/buildUrl");

async function doRequest(country) {
  const url = buildUrl(country);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Erro na requisição:", err.message);
    return null;
  }
}

module.exports = doRequest;
