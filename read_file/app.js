'use strict'

const fs = require('fs');

if (process.argv.length <= 2) {
    console.error("ファイル名を指定してください。");
} else {
    let reader = fs.readFileSync(process.argv[2], "utf-8");
    console.log(reader);
}

