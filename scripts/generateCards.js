const imageScript = require("imagescript");
const fs = require("fs");
const path = require("path");

let font = fs.readFileSync(path.join(__dirname, "..", "fonts", "Roboto-Bold.ttf"));

let defaults = [
  ["404!?!??!?!", "_404"],
  ["index", "_[lang]"],
];

async function getShit() {
  for (let file of readdirRecursive("pages")) {
    let fileName = file.split("/");
    let name = fileName[fileName.length - 1].replace(".tsx", "") == "index" ? fileName[fileName.length - 2].replace(".tsx", "") : fileName[fileName.length - 1].replace(".tsx", "");

    generate(name, file.split("pages/")[1].replace("/index", "").replace(/\//gim, "_").replace(".tsx", ".png"));
  }
  for (let [text, out] of defaults) {
    generate(text, out + ".png");
  }
}

async function generate(text, out) {
  let image = await imageScript.Image.decode(fs.readFileSync(path.join(__dirname, "..", "public", "cards", "default.png")));
  const firstence = await imageScript.Image.renderText(font, 180, text, 0xfcfcfcff);
  const desc = await imageScript.Image.renderText(font, 50, "Tricked software developer 2021", 0xfcfcfcff);
  image.composite(firstence, 100, 100);
  image.composite(desc, 120, 320);
  let img = await image.encode();
  fs.writeFileSync(path.join("public", "cards", out), img);
}

function readdirRecursive(directory) {
  const result = [];

  (function read(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filepath = path.join(dir, file);

      if (fs.statSync(filepath).isDirectory()) {
        read(filepath);
      } else if (filepath.endsWith(".tsx")) {
        result.push(filepath);
      }
    }
  })(directory);

  return result;
}

getShit();
