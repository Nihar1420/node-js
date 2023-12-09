// Here we will see how we can use the built in module of node that is the file system module to create files and folders.

// Here we are importing the fs module
const fs = require("fs");

// We can use the writeFileSync to create files inside a folder as follows - (CREATING FILES IN A FOLDER)

// fs.writeFileSync('fs_made_file.js' , '// This is a demo file made using the fs module');
// fs.writeFileSync('demo.txt','This is some demo text being written');

// We can also list out the files present in a folder as follows - (LISTING THE FILES IN A FOLDER)

// fs.readdir(`${__dirname}`, (err, data) => {
//   data.forEach((file) => {
//     console.log(file);
//   });
// });

// We can also read the data present in a particular file using the readFile function - (READING THE FILE IN A FOLDER)

// fs.readFile(`${__dirname}/demo.txt`,'utf-8', (err , data) => {
//   console.log(data);
// });

// We can also update data in a particular file by using the appendFile - (UPDATING A FILE IN A FOLDER)

// fs.appendFile(`${__dirname}/demo.txt`,'/n Another line appended',(err)=>{
//   !err && console.log("File updated successfully");
// });

// We can also rename a file using the rename function as follows - (RENAMING A FILE IN A FOLDER)

// fs.rename(`${__dirname}/demo.txt`, "renamedDemo.txt", (err) => {
//   !err && console.log("Renamed successfully");
// });

// We can also delete a file from a folder as follows - (DELETING A FILE FROM A FOLDER)

// fs.unlinkSync(`${__dirname}/fs_made_file.js`);
