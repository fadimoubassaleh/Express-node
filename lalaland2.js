const express = require('express')
const app = express()
const port = 3000


app.get(('/'),(req,res)=>{
    res.send(`<form action="/myform" method="GET">
                your title
                <input type="text" name="title" required />
                <br />
                text
                <input type="text" name="text" required />
                <br />
                <input type="submit" value="Submit" />
            </form>`)
    // console.log(JSON.stringify(data))
})
app.get('/myform', function(req, res){ 
    var myText = ('<h1>' + req.query.title + `</h1><br />` + req.query.text )
    res.send(myText); 
}); 

app.listen(port,(err)=>{
    if(err){
        console.log('something bad happened', err)
    }else{
        console.log(`server is listening on port ${port}`)
    }
});