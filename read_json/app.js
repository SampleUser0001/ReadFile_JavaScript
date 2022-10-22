'use strict'

const fs = require("fs");

if(process.argv.length <= 2) {
    console.error("ファイル名を指定してください。");
} else {
    const data = fs.readFileSync(process.argv[2], "utf-8");
    const json = JSON.parse(data);

    for(const obj of json) {
        console.log(obj);
    }
}
