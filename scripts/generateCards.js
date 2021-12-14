const imageScript = require("imagescript");
const png = require("imagescript/png/node");
const mem = require("imagescript/utils/mem");
const fs = require("fs");
const path = require("path");

//Precache data
const font = fs.readFileSync(path.join(__dirname, "..", "fonts", "Roboto-Bold.ttf"));
const defaultPng = fs.readFileSync(path.join(__dirname, "..", "public", "cards", "default.png"));
const png_data = png.decode(mem.view(defaultPng));

//Overwrites [value,name.png]
const defaults = [
  ["404!?!??!?!", "404"],
  ["index", "[lang]"],
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
  await png_data;
  let image = new imageScript.Image(png_data.width, png_data.height);
  image.bitmap.set(png_data.pixels);
  const firstence = await imageScript.Image.renderText(font, 180, text.charAt(0).toUpperCase() + text.slice(1), 0xfcfcfcff);
  const desc = await imageScript.Image.renderText(font, 50, "Tricked-dev 2021", 0xfcfcfcff);
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
