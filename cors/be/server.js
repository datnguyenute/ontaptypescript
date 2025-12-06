const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const https = require("https");

const app = express();
const port = 3000;

// Để parse dữ liệu submit form (HTML form) theo keui73 application/x-wwww-form-urlencorded thay vì querystring
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Fake db
const db = {
  users: [
    {
      id: 1,
      email: "dat@gmail.com",
      password: "123",
      name: "Nguyen Ba Dat",
    },
  ],
  posts: [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
  ],
};

// const sessions
const sessions = {};

app.get("/", (req, res) => {});

app.get("/api/posts", (req, res) => {
  const posts = db.posts;
  res.json(posts);
});

// [POST] /api/auth/login
app.post("/api/auth/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = db.users.find((user) => user.email === email && user.password === password);
  if (!user) {
    res.status(401).json({
      message: "Unauthorize",
    });
  }

  // Session
  const sessionId = Date.now().toString();
  sessions[sessionId] = { sub: user.id };
  res.setHeader("Set-Cookie", `sessionId=${sessionId}; httpOnly; Max-Age=3600; samesite=None; Secure`).json(user);
});

// [GET] /api/auth/me
app.get("/api/auth/me", (req, res) => {
  const session = sessions[req.cookies.sessionId];
  if (!session) {
    res.status(401).json({
      message: "Unauthorize",
    });
  }

  const user = db.users.find((user) => user.id === session.sub);
  if (!user) {
    res.status(401).json({
      message: "Unauthorize",
    });
  }
  res.json(user);
});

// app.listen(port, () => {
//   console.log(`Started server at port ${port}`);
// });

https
  .createServer(
    {
      key: fs.readFileSync("./testcookie.com+1-key.pem"),
      cert: fs.readFileSync("./testcookie.com+1.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log(`Started server at port ${port}`);
  });
