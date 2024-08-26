const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get("/",(req,res) => {
  res.sendFile("./index.html",{root:__dirname})
})

app.get("/products/mens-matching-border-dhoti-half-sleeves-shirt-set-trendy-cc9",(req,res) => {
  res.sendFile("product.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})