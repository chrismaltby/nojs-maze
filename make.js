const fs = require("fs");
const ejs = require("ejs");
const data = require("./data.json");

const templateFilename = __dirname + "/maze.ejs";
const outFilename = __dirname + "/index.html";

const template = fs.readFileSync(templateFilename, "utf8");
const html = ejs.render(template, data);

fs.writeFileSync(outFilename, html);
