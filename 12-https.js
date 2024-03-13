const http = require('http')

//req : incoming request
//res : response
const server = http.createServer((req,res) => {
    //console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page.')
    }
    else if (req.url === '/about') {
        res.end('This is the about page.')
    }
    else res.end(`
<h1> Oops! </h1>
<p> We can't seem to find the page you are looking for...</p>
<a href="/"> back home </a>
    `)
})

server.on('error', (e)=>{
    console.log(e)
})
server.listen(3000)