const bcrypt = require("bcryptjs");
const User = require("../models/users");
function register(req, res) {
  const { firstName, lastName, email, password } = req.body;
  if (!email) res.status(400).send({ msg: "el email es obligatorio" });
  if (!password) res.status(400).send({ msg: "La contrasena es obligatoria" });

  const user = new User({
    firstName,
    lastName,
    email: email.toLowerCase(),
    role: "user",
    active: false,
    password,
  });
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  user.password = hashPassword;

  user.save((error, userStorage) => {
    if (error) {
      return res.status(400).send({ msg: "Error al crear el usuario" });
    }

    res.status(201).json(userStorage);
  });
}

module.exports = {
  register,
};
