const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

io.on("connection", (socket) => {
  console.log("A user connected.");
  // io.to(si).emit("Welcome", "Hello this is socket server");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.Id);
    io.emit("getUsers", users);
  });
  // take userid and socket id from user
});
