const http = require('http')
const port = 3000



const server = http.createServer( (request, response) =>{
    const url = request.url.split('/')
    // response.sendStatus(404).send('Not found');
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
            }else if (url[1] == 'posts'){
                if(!url[2]){
                    response.end(header + body1('Its posts page', 'Its our posts page', "Congrats"))
                }else if (url[2] < 5001) {
                    response.end(header + body1(('Its post number '+url[2]) , 'Its the percfect choise', "Congrats"))
                }else{
                    response.end(header + body1('WORNING!', 'the post you requested does not exist!', 'ERROR'))
                }
            }else if(url[1] == 'add'){
                if (!url[2] || !url[3]){
                    response.end(header + body1('WORNING!', 'not enough arguments', 'ERROR'))
                }else{
                    const add = parseInt(url[2], 10) + parseInt(url[3], 10)
                    response.end(header + body1('WO HOoo!', ('We add the number ' + url[2] + ' to the number ' + url[3] + ' and the results is'), ('<br />' + add)))
                }
            }else if(url[1] == 'remove'){
                if (!url[2] || !url[3]){
                    response.end(header + body1('WORNING!', 'not enough arguments', 'ERROR'))
                }else{
                    const add = parseInt(url[2], 10) - parseInt(url[3], 10)
                    response.end(header + body1('WO HOoo!', ('We remove the number ' + url[2] + ' from ' + url[3] + ' and the results is'), ('<br />' + add)))
                }
            }else{
                response.end(header + body1('WORNING!', 'yOU HavE A bIg ERROR', 'Like my typing'))
            }
        })
        
        
        
        server.listen(port, (err)=> {   
        if (err) {
            throw err;
        }else{
            console.log(`server is listening on port ${port}`)
        }
        //create error function:
        const err404 = (res) => {
            res.statusCode = 404;
            res.setHeader('content-type', 'text/html');
            res.write('Error 404: Page not found!');
            res.end()
        }})
        