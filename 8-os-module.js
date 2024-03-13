const os = require('os')

//Info about current user
const user = os.userInfo()
//console.log(user)

//Method returns the system uptime in seconds
//onsole.log(`The system uptime is ${os.uptime()} seconds.`)

//Information about our current operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(), 
}
console.log(currentOS)