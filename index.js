const { run: jscodeshift } = require("jscodeshift/src/Runner");
const path = require("node:path");

const transformPath = path.resolve("./transform.js");
const paths = ["./code.js"];
const options = {
  dry: false,
  print: false,
  verbose: 1,
  babel: true,
  extensions: "js",
  ignorePattern: ["node_modules"],
};

const main = async () => {
  const res = await jscodeshift(transformPath, paths, options);
  console.log("Transformation complete", res);
};

main();
