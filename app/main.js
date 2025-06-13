const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

//Uncomment this to pass the first stage
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
      const data = data.toString().split("\r\n")
      [a, b, c] = data[0].split(" ");
      console.log({method:a,path:b,version:c});
      
      socket.write("HTTP/1.1 200 OK\r\n\r\n");
      socket.end();
  });
  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, "localhost");

