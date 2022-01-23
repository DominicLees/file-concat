const fs = require("fs");
const path = require('path');


function getPath(dir, file) {
	return dir.substr(-1) === "/" ? `${dir}${file}` : `${dir}/${file}`;
}

function concat(dir, outputFile, config) {

	const outputFilePath = config.outputDir ? getPath(__dirname, outputFile) : getPath(dir, outputFile);

	// Delete output file if it already exists
	if (fs.existsSync(outputFilePath)) {
		fs.unlinkSync(outputFilePath);
	}

	// Read the name of each file in the directory
	fs.readdirSync(dir).forEach(file => {
		// If only files with a specific file are being concatenated, only select files with that extension
		if (config.ext == null || path.extname(file) === "." + config.ext) {
			// Append files to the output file
  			fs.appendFileSync(outputFilePath, fs.readFileSync(getPath(dir, file)));
		}
	});

	// Move the output if a different output directory has been specified
	if (config.outputDir && fs.existsSync(outputFilePath)) {
		if (!fs.existsSync(config.outputDir)){
    		fs.mkdirSync(config.outputDir, { recursive: true });
		}
		fs.renameSync(outputFilePath, getPath(config.outputDir, outputFile));
	}

}


module.exports = concat;
