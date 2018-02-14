console.log('batata')

const fs = require('fs')

fs.writeFileSync('./my-text-file.txt','wooooow','utf8')

const files = fs.readdirSync('./')

console.log(files)