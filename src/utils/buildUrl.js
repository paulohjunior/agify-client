function buildUrl(names, country) {
  const BASE_URL = "https://api.agify.io/?";
  const queryNames = names.map((name) => `name[]=${name}`).join("&");
  const countryParam = country ? `&country_id=${country}` : "";
  return `${BASE_URL}${queryNames}${countryParam}`;
}

module.exports = buildUrl;