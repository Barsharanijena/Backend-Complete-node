const path =  require("path");

console.log("Directory name:", path.dirname(__filename));

console.log('file name', path.basename(__filename));

console.log('file extension', path.extname(__filename));

const joinpath = path.join("/user" ,"document","node","projects");
console.log("joined path", joinpath);

// Normalizing a path
const abnormalPath = "/user//document/../document/node//projects";
const normalPath = path.normalize(abnormalPath);
console.log("Normalized path:", normalPath);

// Resolving absolute path
const resolvePath = path.resolve("user", "document", "node", "projects");
console.log("Resolved absolute path:", resolvePath);