const hppt = require('http');
const { readFileSync } = require('fs');

// get all file
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = hppt.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url
    const body = req.body

    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    // About page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write('<h1>About page</h1/')
        res.end()
    }
    // Styles
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    // Contact page
    else if (url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write('<h1>Contact page</h1/')
        res.end()
    }
    // Page not found 404
    else {
        res.writeHead(404, { 'content-type': 'text/html'})
        res.write('<h1>Page not found</h1/')
        res.end()
    }
})

server.listen(8080)