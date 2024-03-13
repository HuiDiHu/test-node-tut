const path = require('path')
console.log(path.sep)

//Your file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//Your base
const base = path.basename(filePath)
console.log(base)

//path.resolve resolves the path into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)