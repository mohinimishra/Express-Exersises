let http = require('http')
const fs = require('fs')
const { dirname } = require('path')
function reqhandler(req, res) {
    if (req.url == '/') {
        fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {
            if (err) {
                res.write(err, "error")
                res.end()

            } else {
                res.write(data)
                res.end()
            }
        })
    } else if (req.url == "/style.css") {
        fs.readFile(__dirname + '/style.css', 'utf-8', (err, data) => {
            if (err) {
                res.write(err, "error")
                res.end()

            } else {
                res.write(data)
                res.end()
            }
        })
    }
}
let server = http.createServer(reqhandler)
server.listen(3000)