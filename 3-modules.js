// Modules

//START WITH ./
//(sets up the path)
const names = require('./4-7_Modules_Introduction/4-names')
const sayHi = require('./4-7_Modules_Introduction/5-utils')
const data = require('./4-7_Modules_Introduction/6-alternative-flavor')

console.log(data)
console.log(`Single person name: ${data.singlePerson.name}`)
for (var i = 0; i < 5; i++) {
    sayHi(i % 2 == 0? names.john : names.susan)
}

//invoke function even without calling directly in app.js :D
require('./4-7_Modules_Introduction/7-mind-grenade')
