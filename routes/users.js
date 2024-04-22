var express = require('express');
var router = express.Router();
// Super secret advanced gamer db
//
class User {
  name
  email

  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

let users = [new User("Joseju", "cheetos"), new User("elrichmc", "gaming")]
/* GET users listing. */
router.get('/', function(req, res, next) {
  userList = ""
  for (const user of users) {
    userList += "name: " + user.name + " email: " + user.email + "<br>"
  }
  res.send(userList);
});

router.get('/:uid', function(req, res, next) {
  const id = req.params.uid - 1
  if (id < 0 || id >= users.length) {
    res.send("Usuario no encontrado");
  }
  res.send(users[id]);
});

router.put('/:uid', function(req, res, next) {
  const { name, email } = req.body
  const id = req.params.uid - 1
  if (id < 0 || id >= users.length) {
    res.send("Usuario no encontrado");
    return
  }
  users[id].name = name
  users[id].email = email
  res.send(users[id]);
});

router.delete('/:uid', function(req, res, next) {
  const id = req.params.uid - 1
  if (id < 0 || id >= users.length) {
    res.send("Usuario no encontrado");
    return
  }
  users.splice(id, 1)
  res.send(users);
});

router.post('/', function(req, res, next) {
  const { name, email } = req.body
  var newUser = new User(name, email)
  users.push(newUser)
  res.send(newUser)
});

module.exports = router;
