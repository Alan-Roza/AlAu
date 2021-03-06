const express = require('express')
// eslint-disable-next-line quotes
const serveStatic = require("serve-static")
const path = require('path')

const app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
const port = process.env.PORT || 3000
app.listen(port)
