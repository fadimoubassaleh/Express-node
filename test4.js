

const http = require('http')
const port = 3000

const server = http.createServer( (request, response) =>{
    const url = request.url.split('/')
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


    if (url[1] == 'home'){
        response.end(header + body1('Its Home page', 'Welcome Home dude', "Congrats"))
    }else if(url[1] == 'about'){
        response.end(header + body1('Its about page', 'Its our about page', "Congrats"))
        
    }
    
    else{
        response.end(header + body1('WORNING!', 'yOU HavE A bIg ERROR', 'Like my typing'))
    }
})


server.listen(port, (err)=> {
    if (err) {
        console.log('something bad happened', err)
    }else{
        console.log(`server is listening on port ${port}`)
    }
})
