const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: "Romaguera-Crona"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771"
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: "Deckow-Crist"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157"
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257"
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: "Robel-Corkery"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263"
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "Keebler LLC"
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337"
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: "Considine-Lockman"
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984"
      }
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: "Johns Group"
  }
];
let users = [
  { name: "Site Admin", username: "admin", password: "admin123" },
  { name: "Shivam Kumar", username: "shivam", password: "123456" }
];
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/data", (req, res) => res.json(data));

app.post("/authenticate", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  };
  users.forEach(usr => {
    if (user.username == usr.username) {
      if (user.password == usr.password) {
        return res.json({ success: true });
      }
    }
  });
  res.json({ success: false });
});
app.get("/checkUsername", (req, res) => {
  let usr = req.query.ip;
  users.forEach(user => {
    if (usr == user.username) {
      return res.json({ avb: false });
    }
  });
  res.json({ avb: true });
});
app.post("/register", (req, res) => {
  const user = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  };
  users.push(user);
  res.json({ success: true });
});
app.post("/updateUser", (req, res) => {
  data.forEach((user, i) => {
    if (user.id === req.body.id) {
      data[i] = req.body;
      return res.json({ success: true });
    }
  });
});
app.get("/deleteUser", (req, res) => {
  data = data.filter((usr, i) => usr.id != req.query.id);
  return res.send("deleted");
});
app.get("/user", (req, res) => {
  data.forEach(user => {
    if (req.query.id == user.id) {
      return res.json(user);
    }
  });
});
app.post("/insert", (req, res) => {
  let user = req.body;
  user.id = data[data.length - 1].id + 1;
  data.push(user);
  return res.json({ success: true });
});
app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
