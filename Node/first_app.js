const fs = require("node:fs/promises");
const path = require("node:path");
const folder = process.argv[2] ?? ".";

const ls = async (folder) => {
	let files;
	try {
		files = await fs.readdir(folder);
	} catch (error) {
		console.log(`No se pudo leer el directorio ${folder}`);
		process.exit(1);
	}

    const filesPromises = files.map(
        async (file) => {
            const filePath = path.join(folder, file);
            let fileStats
            try{
                fileStats = await fs.stat(filePath);
            } catch (error) {
                console.log(`No se pudo leer el archivo ${filePath}`);
                return;
            }
            const isDirectory = fileStats.isDirectory();
            const fileType = isDirectory ? "d" : "-";
            const fileSize = fileStats.size;
            const fileModified = fileStats.mtime.toLocaleString();

            return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`;
        }
    )
    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
};
ls(folder);