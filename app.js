const http = require('http')
const server = http.createServer((reg,res) => {

if(reg.url === '/') {
    res.end('Welcome to our home page') 
}
if(reg.url === '/about') {

}

res.end(`<h1>Oops</h1>`)

})
server.listen(6000) 