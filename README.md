# file-concat
Simple node package to combine multiple files into one.

## Import into your project
```js
const fc = require('file-concat');
```

## Documentation
```js
fc(inputDirectory, outputFileName, config);
```

* inputDirectory - required - the path to the directory contatining the files to be concatenated
* outputFileName - required - the name of the file where the output will be stored, must include extension
* config - optional
* * .ext - only accept files with this extention, by default all files will be concatenated
* * .outputDir - the directory to put the output file in, by default puts the output file in the input directory

## Example
```js
fc("./testFiles", "output.txt", {ext: "txt", outputDir: "./"});
```
