const BASE_URL = "https://api.agify.io/?";
const NAMES = ["victor", "milson", "gabriela", "patricia", "wagner", "brenda"];

function buildUrl(country) {
  const queryNames = NAMES.map((name) => `name[]=${name}`).join("&");
  const countryParam = country ? `&country_id=${country}` : "";
  return `${BASE_URL}${queryNames}${countryParam}`;
}

module.exports = buildUrl;