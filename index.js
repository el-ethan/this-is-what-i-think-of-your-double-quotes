const fs = require('fs');
const program = require('commander');

function main() {
    program
        .arguments('<fileToLint>')
        .action((fileToLint) => fixDoubleQuotes(fileToLint))
        .parse(process.argv);

}

function fixDoubleQuotes(file) {
    const fileContents = fs.readFileSync(file, 'utf8');
    const writeStream = fs.createWriteStream(file);
    const updatedFileContents = fileContents.replace(/"/g, '💩');
    writeStream.write(updatedFileContents);
    writeStream.end();
}

main();
