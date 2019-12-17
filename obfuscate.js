const fs            = require('fs');
const path          = require('path');
const jsObfuscate   = require('javascript-obfuscator');

const source        = path.join(__dirname, 'assets', 'js', 'source');
const output        = path.join(__dirname, 'assets', 'js');

const srcFile       = (file) => path.join(source, file);
const outFile       = (file) => path.join(output, file);

fs.readdir('./assets/js/source/', function(error, files) {
    files.forEach(function(file, index) {
        let fileContent = fs.readFileSync(srcFile(file), { encoding: 'utf-8' });
        let obfuscated = jsObfuscate.obfuscate(fileContent, {
            compact: true,
            controlFlowFlattening: true
        });
        let result = obfuscated.getObfuscatedCode();
        let newFile = file.replace('.js','.min.js');
        fs.writeFileSync(outFile(newFile), result);
    })
})