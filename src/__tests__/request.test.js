const doRequest = require("../api/request");

describe("doRequest", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should return data when fetch succeeds", async () => {
    const mockData = [{ name: "victor", age: 48, count: 857 }];

    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await doRequest(["victor"], "BR");
    expect(result).toEqual(mockData);
  });

  it("should return null when fetch fails", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    
    global.fetch.mockResolvedValue({
      ok: false,
      status: 500,
    });

    const result = await doRequest(["victor"], "BR");
    expect(result).toBeNull();
  });
});
