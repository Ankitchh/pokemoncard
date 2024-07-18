const express = require ("express");
const path = require('path');
const app = express();
var port = 3000;

app.use(express.static(path.join(__dirname + '/public')));

app.use((req,res)=>{
    res.status(404);
    res.send('<h1>Error 404: Resources not found</h1>')
});

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})