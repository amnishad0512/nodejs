// we used fs (core module) to create file

const fs = require('fs');
fs.writeFileSync("newFile.txt","This is new file created through fs.writeFileSync()")

// we used directly specific function
const createFile = require('fs').writeFileSync;
createFile("newFile2.txt","This is new file created through specific function");