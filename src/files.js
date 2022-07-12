const fs = require('fs');

const saveFile = (html) => {
    fs.writeFileSync("./dist/index.html", html);
}

module.exports = { saveFile };