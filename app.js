const express = require('express')
const app = express() 
app.use(express.static('./public'))
app.get('/', (req , res) => {
    res.send('home')
   })
app.listen(9000, () => {
    console.log('sever listening in port ${9000}')
})
