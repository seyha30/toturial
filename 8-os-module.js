// method return the system uptime in seconds

const os = require('os')
console.log(`the system uptime is ${os.uptime()} seconds`)
const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS)