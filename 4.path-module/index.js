const path =  require("path");

console.log("Directory name:", path.dirname(__filename));

console.log('file name', path.basename(__filename));

console.log('file extension', path.extname(__filename));

const joinpath = path.join("/user" ,"document","node","projects");
console.log("joined path", joinpath);