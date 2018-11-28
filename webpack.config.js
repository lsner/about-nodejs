var  path  = require("path")
console.log(path.resolve())
console.log("------------------")
module.exports = {
    entry:{
        entry1:'./src/post.js',
        entry2:'./',
    },
    output:{
        path:__dirname + "/dist",
        filename:"bundle.js"
    }
}