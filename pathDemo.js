import path from 'path';

const filePath = "./dir1/dir2/test.txt";

//BaseName
console.log(path.basename(filePath));

//DirName
console.log(path.dirname(filePath));

//extName()
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath));