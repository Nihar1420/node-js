const http = require("http");
const server = http.createServer();
require("dotenv").config({ path: `.env.local` });

const PORT = process.env.PORT;

server.on("request", (req, res) => {
  res.end("Hello");
});

server.listen(PORT, () => {
  console.log(`The server is up and running on PORT ${PORT}`);
});
