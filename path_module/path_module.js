// Now we can see how we can use the path module of node js along with its different properties for better ease -

// We can import path module as follows -
const path = require("path");

// We know that we can know the directory name as well as file name as follows -
// console.log(__dirname, 'This is the path for directory');
// console.log(__filename, 'This is the path for file');

// Now we can see how we can use the path variable for all these -

// console.log(path.dirname(__dirname), "Using path module for dirname");
// console.log(path.basename(__filename), "Using path module for filename");

// We can also join paths using the join method of path module -

// const currentFilename = path.basename(__filename);
// const newPath = path.join(__dirname , currentFilename);
// console.log(newPath , 'This is the full path of the file');
