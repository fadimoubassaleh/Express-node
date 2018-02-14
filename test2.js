console.log('node is beginning to read the file')

const http = require('http')
const port = 3000

const server = http.createServer( (request, response) => {
    const url = request.url
        response.end (`<html>
            <head>
                <style>
                    body{
                        text-align: center;
                    }
                </style>
                <title>SECRET PAGE</title>
            </head>
            <body>
                <h1>Hello!</h1>
                <p>Enter your name</p>
                <input type='text' placeholder='ex. Fadimoubassaleh'/>
                <p>Enter your password</p>
                <input type='password' />
                <button >Go</button>
            </body>
        </html>`)
    if (url == '/home'){
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
                }
                else{
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
                        </html>
                    `)
}})


server.listen(port, (err) => {
  if (err) {
    console.log('something bad happened', err)
  }else{
    console.log(`server is listening on port ${port}`)
  }
})

console.log('node has read the whole file, now it will run')