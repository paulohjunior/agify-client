jest.mock("../api/request", () => jest.fn());
jest.mock("../utils/printData", () => jest.fn());

const doRequest = require("../api/request");
const printData = require("../utils/printData");
const main = require("../main");

describe("main", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should fetch and print data", async () => {
    const mockData = [{ name: "victor", age: 48, count: 857 }];
    doRequest.mockResolvedValue(mockData);

    await main(["victor"], "BR");

    expect(doRequest).toHaveBeenCalledWith(["victor"], "BR");
    expect(printData).toHaveBeenCalledWith(mockData);
  });

  it("should handle no data case", async () => {
    doRequest.mockResolvedValue(null);

    await main(["victor"], "BR");

    expect(printData).not.toHaveBeenCalled();
  });

  it("should handle empty array case", async () => {
    doRequest.mockResolvedValue(null);

    await main(["victor"], "BR");

    expect(printData).not.toHaveBeenCalled();
  });
});