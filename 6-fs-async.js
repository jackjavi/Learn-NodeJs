const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result2) => {
    if (err) {
      return;
    }
    const second = result2;

    writeFile(
      "./content/result-async.txt",
      `${first} \n and \n ${second} \n async files`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        return result;
      }
    );
  });
});
