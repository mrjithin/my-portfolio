const sass = require("sass");
const promisify = require("util").promisify;
const fs = require("fs");
const writeFile = fs.writeFile;
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);
// Creates a directory 'css'. 
fs.mkdir(__dirname + '/../css',{ recursive: true }, (err) => {
  if(err) throw err;
})
async function main(file) {
  const styleResult = await sassRenderPromise({
    file: `./styles/sass/${file}.scss`,
    outFile: `./styles/css/${file}.css`,
    sourceMap: true,
    sourceMapContents: true,
    outputStyle: "compressed",
  });
  await writeFilePromise(`${__dirname}/../css/${file}.css`, styleResult.css, "utf8");
  await writeFilePromise(`${__dirname}/../css/${file}.css.map`, styleResult.map, "utf8");
}
main('style');
main('nav');
main('chrome');
