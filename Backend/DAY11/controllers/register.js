//check if email exists
//password hash
//email->lowercase
//save

const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email padi hui h godam m");
    } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
      });
      const savedUser = await newUser.save();

      res.status(201).send("User register kar diya !");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Kuch to gadbad h !");
  }
};

module.exports = register;
