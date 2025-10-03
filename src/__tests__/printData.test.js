const printData = require("../utils/printData");

describe("printData", () => {
  it("should print formatted data", () => {
    const mockData = [{ name: "victor", age: 48, count: 857 }];

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    printData(mockData);

    expect(logSpy).toHaveBeenCalledWith("Nome:", "victor");
    expect(logSpy).toHaveBeenCalledWith("Idade média:", 48);
    expect(logSpy).toHaveBeenCalledWith("Quantidade de registros:", 857);

    logSpy.mockRestore();
  });
});
