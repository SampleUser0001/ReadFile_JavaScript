# ReadFile_JavaScript
JavaScriptでファイル読み込みする。

## 実行

### text

``` bash
cd read_file
node app.js ${ファイルパス}
```

### csv

#### 初回

``` bash
cd read_csv
npm init -y
npm install --save csv-perse
touch read_csv.js
```

#### 2回目以降

``` bash
cd read_csv
npm install

node read_csv.js ${csvファイルパス}
```

### json

``` bash
cd read_json
# npm init -y
node app.js ${jsonファイルパス}
```

## 参考

- [node.jsでファイルの入出力操作:Qiita](https://qiita.com/shirokuman/items/509b159bf4b8dd1c41ef)
- [Node.jsでコマンドライン引数を取得する:Qiita](https://qiita.com/furusin_oriver/items/f030d1eaa9e7b54233c3)
- [Node.jsでCSVファイルを読み込む方法:Zenn](https://zenn.dev/tatsuyasusukida/articles/nodejs-csv-read)
- [【JavaScript】JSONファイルの読み込み方:Qiita](https://qiita.com/s_ryota/items/f178278b1a966b0db896)