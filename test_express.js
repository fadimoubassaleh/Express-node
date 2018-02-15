const express = require('express')
const app = express()
const port = 3000


function createButton(pageUrl){
    return `
        <form action="/`+ pageUrl +`" method="GET"> 
            <input type="submit" value="`+ pageUrl +`" />
        </form>   
    `
}
const header = (`
        <html>
            <head>
                <style>
                    body{
                        text-align: center;
                    }
                </style>
                <title>my super app</title>
            </head>
        `)
function body1(title, input1, input2){
    return `
            <body>
                <h1>`+ title +`</h1>
                <p><b>`+input1+`<br />`+input2+`.</b></p>
            </body>
        </html>
    `
};
const articels = [
    {title: "my node",content: "node is the server"},
    {title: "my php",content: "php is the old man"},
    {title: "my js",content: "js is the best"}
    
]
app.get(('/'),(req,res)=>{
    res.send(header + `<body>
            <form action="/new" method="GET">
                your title
                <input type="text" name="title" required />
                <br />
                text
                <input type="text" name="text" required />
                <br />
                <input type="submit" value="Submit" />
            </form>`+
            createButton('/home') + createButton('/about') + createButton('/posts') + createButton('/articles')
            + `</body>`)
})
app.get(('/home'),(request,response)=>{
    response.send(header + body1('Its Home page', 'Welcome Home dude', "Congrats"))
})
app.get(('/about'),(request,response)=>{
    response.send(header + body1('Its about page', 'Its our about page', "Congrats"))
})
app.get(('/posts'),(request,response)=>{
    response.send(header + body1('Its posts page', 'Its our posts page', "Congrats"))
})
app.get(('/articles/:number?'),(req, res)=>{
    var makePage = (`
    <head><title>EXPRESS.JS</title><style>
    body{text-align: center;
    width: 75%;
    border-left: 5px solid rgba(73, 204, 249, 1.0);
    border-right: 5px solid rgba(73, 204, 249, 1.0);
    margin:auto;
    margin-top:30px}
    </style></head>
    `)
    
    if (!req.params.number){
        makePage += `<h1>Articles</h1> <br /><br />`
        for (i = 0;i < articels.length;i++){
            makePage += ((`<h3>Article title: `) + articels[i].title + `<h3/>    <h3>Content: ` + articels[i].content + `<h3/><br />`)
        }
        res.send(makePage)
    }else if(req.params.number <= articels.length && req.params.number > 0){
        var i = parseInt(req.params.number) - 1;
        var j = parseInt(req.params.number)
        makePage += ((`<h1>Article number: `+ j +`</h1> <br /><br /><h3>Article title: `) + articels[i].title + `<h3/>    <h3>Content: ` + articels[i].content + `<h3/><br />`)
        res.send(makePage.toString())
    }else{
        var j = parseInt(req.params.number)
        makePage += ((`<h1>ATTENTION</h1> <h3>The article number: `) + j + (`<br /><br />We have only `) + articels.length + (` articles</h3>`))
        res.send((makePage))
    }
})
app.get(("/new"), (req, res)=>{
    var newArt = {title: req.query.title ,content: req.query.text} 
    articels.push(newArt);
    var i = articels.length - 1;
    var j = articels.length 
    res.send((header + `<h1>Article number: `+ j +`</h1> <br /><br /><h3>Article title: `) + articels[i].title + `<h3/>    <h3>Content: ` + articels[i].content + `<h3/><br /></html>`)
})

app.listen(port,(err)=>{
    if(err){
        console.log('something bad happened', err)
    }else{
        console.log(`server is listening on port ${port}`)
    }
});