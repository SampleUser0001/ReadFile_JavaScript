'use strict'

const fs = require("fs");
const path = require("path");
const {parse} = require("csv-parse/sync");

function main(csvPath) {
    const source = path.join(__dirname, csvPath);
    const buffer = fs.readFileSync(source);
    const options = {escape: '\\'};
    const {ok, err} = canParse(buffer, options);
    
    if(ok) {
        const rows = parse(buffer, options);
        console.info(rows);
    } else {
        console.error(err);
    }
}

function canParse(data, options) {
    let ok, message;
    try {
        parse(data, options);
        return {ok: true, err: null};
    } catch(err) {
        return {ok: false, err};
    }
}

if (require.main === module) {
    if (process.argv.length <= 2) {
        console.error("ファイル名を指定してください。");
    } else {
        main(process.argv[2]);
    }
}
