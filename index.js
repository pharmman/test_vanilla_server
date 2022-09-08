const http = require('http')
const fs = require('fs');
const path = require('path');

let requestsCount = 0
const _favicon = path.join(__dirname, 'public', 'favicon.ico')
const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') {
        response.setHeader('Content-Type', 'image/x-icon');
        fs.createReadStream(_favicon).pipe(response);
        return
    }
        requestsCount++
    switch (request.url) {
        case '/':
            response.write('main')
            break
        case '/incubator':
            response.write('back')
            break
        default:
            response.write('404 not found')
    }
    response.write(` ${requestsCount}`)
    response.end()
})

server.listen(3000)

