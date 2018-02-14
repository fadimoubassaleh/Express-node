console.log('node is beginning to read the file')

const http = require('http')
const port = 3000

const server = http.createServer( (request, response) =>{
    const url = request.url
    if (url == `/home`){
        response.end(`
            <html>
            <head>
                <style>
                    body{
                        text-align: center;
                    }
                </style>
                <title>my super app</title>
            </head>
            <body>
                <h1>Hello!</h1>
                <p><b>It's your HOME page<br />Congrats.</b></p>
            </body>
            </html>
            `)
    }else if (url == `/posts`){
            response.end (`
            <html>
            <head>
                <style>
                    body{
                        text-align: center;
                    }
                </style>
                <title>my super app</title>
            </head>
            <body>
                <h1>This is the posts page!</h1>
                <p><b>Type the post number in url<br />Thats it.</b></p>
            </body>
            </html>`)
        const url2 = request.url
        console.log(url2)
        if (url == `/posts/1`){
            response.end(`
            <html>
            <head>
                <style>
                    body{
                        text-align: center;
                    }
                </style>
                <title>my super app</title>
            </head>
            <body>
                <h1>This is the first page!</h1>
                <p><b>there nothing to do here<br />try any number else.</b></p>
            </body>
            </html>`)
        }else {
            response.end(`
            <html>
            <head>
                <style>
                    body{
                        text-align: center;
                    }
                </style>
                <title>my super app</title>
            </head>
            <body>
                <h1>This is the` + url2 +` page!</h1>
                <p><b>there nothing to do here<br />try any number else.</b></p>
            </body>
            </html>`)
        }
    }else{
        response.end(`
        <html>
        <head>
            <style>
                body{
                    text-align: center;
                }
            </style>
            <title>my super app</title>
        </head>
        <body>
            <h1>WORNING!</h1>
            <p><b>yOU HavE A bIg ERROR <br /> <br /> Like my typing</b></p>
        </body>
        </html>`)
    }
})

server.listen(port, (err)=> {
    if (err) {
        console.log('something bad happened', err)
    }else{
      console.log(`server is listening on port ${port}`)
    }
})