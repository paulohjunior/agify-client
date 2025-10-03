const buildUrl = require("../utils/buildUrl");

describe("buildUrl", () => {
  it("should build URL without country", () => {
    const names = ["victor", "milson"];
    const url = buildUrl(names);
    expect(url).toBe("https://api.agify.io/?name[]=victor&name[]=milson");
  });

  it("should build URL with country", () => {
    const names = ["victor"];
    const url = buildUrl(names, "BR");
    expect(url).toBe("https://api/agify.io/?name[]=victor&country_id=BR".replace("api/", "api.")); // ajusta se necessário
  });
});
