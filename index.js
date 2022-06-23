const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = (url.pathname)
    switch (path) {
        case '/':
            return 
        case '/about':
            return
       case '/contact-me':
            return
        default:
            return
    }
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})