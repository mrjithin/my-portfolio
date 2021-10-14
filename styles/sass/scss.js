const sass = require("sass");
const promisify = require("util").promisify;
const writeFile = require("fs").writeFile;
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

async function main(file) {
  const styleResult = await sassRenderPromise({
    file: `./styles/sass/${file}.scss`,
    outFile: `./styles/css/{file}.css`,
    sourceMap: true,
    sourceMapContents: true,
    outputStyle: "compressed",
  });
  await writeFilePromise("styles.css", styleResult.css, "utf8");
  await writeFilePromise("styles.css.map", styleResult.map, "utf8");
}
main('style');
main('nav');
main('chrome');
