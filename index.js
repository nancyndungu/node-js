const express = require("express");
const app = express();
const PORT =8080;

//use express middleware
app.use(express.json())
app.get('/book',(req, res)=>{
   res.status(200).send({
    book: "number",
    title: "Black Girl",
    color: "Blue"

   })
});
//post requests for book
app.post('/book/:id',(req,res)=>{
    const {id} = req.params;
    const {book} = req.body;
    if (!book){
        res.status(418).send({message: 'we need a number'})
    }
    res.send({
        book:`number with your ${book} and id of ${id}`
    })
});

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
)