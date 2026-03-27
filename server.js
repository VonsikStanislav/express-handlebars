const express = require('express');
const app = require('./app.js');
const PORT = 3000;


app.listen(PORT, ()=>{
    console.log(`\tServer started on PORT: ${PORT}\n\tservere running on: http://localhost:3000/`)
})