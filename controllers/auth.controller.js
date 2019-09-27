  const users = require("../seeders/users");
  const bcrypt = require('bcrypt');


  const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Check authentication 

    const foundUser = users.find(user => user.email == email);

    if (foundUser) {
      const checkPassword = await bcrypt.compare(password, foundUser.password);
      if (checkPassword) {
        return res.json({
          message: "successful",
          token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
          data: {
            email,
            password
          }
        });
      }
    }

    return res.json({
      message: "failed",
      // token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
      data: "wrong username or password"
    });
  }

  const register = async (req, res) => {
    const uuid = require('uuid');

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    //check if email already exists 
    const foundEmail = users.find(user => user.email == email)

    if (foundEmail) {
      return res.json({
        message: "failed",
        data: "the given email already has a user in the system"
      });
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log(hashedPassword); 

    const newObject = {
      id: uuid.v4(),
      email: email,
      password: hashedPassword,
      name: "test"
    }

    users.push(newObject);

    return res.json({
      message: "successful",
      token: "adsfadsfa1ds2fasd23fa1dsfad32sf1ads2f1a",
      data: {
        newObject
      }
    });
  }

  module.exports = {
    login,
    register
  };