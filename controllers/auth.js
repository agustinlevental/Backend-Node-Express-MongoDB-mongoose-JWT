const bcrypt = require("bcryptjs");
const User = require("../models/users");
const jwt= require("../utils/jwt")
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

function login(req, res) {
  const { email, password } = req.body;
  if (!email) return res.status(400).send({ msg: "el email es obligatorio" });
  if (!password) return res.status(400).send({ msg: "la contraseña es obligatoria" });

  const emailLowerCase = email.toLowerCase();
  User.findOne({ email:   
 emailLowerCase }, (error, userStorage) => {
    if (error) {res.status(500).send({ msg: "Error del servidor" });
    } else {
      bcrypt.compare(password, userStorage.password, (bcryptError, check) => {
        if (bcryptError)   
 {
          return res.status(500).send({ msg: "Error del servidor" });
        } else if (!check) {
          return res.status(401).send({   
 msg: "Contraseña incorrecta" });
        } else if (!userStorage.active) {
          return res.status(401).send({ msg: "Usuario no autorizado o no activo" });
        } else {
          const accessToken = jwt.createAccessToken(userStorage);
          const refreshToken = jwt.createRefreshToken(userStorage);
          res.status(200).json({ access: accessToken, refresh: refreshToken });
        }
      });
    }
  });
}
function refreshAccessToken(req,res){
const {token} = req.body
const {user_id} = jwt.decoded(token)
User.findOne({_id:user_id},(error,userStorage)=>{
  if(error){
res.status(500).send({msg:"Error del servidor"})
  } else{
    res.status(200).send({
      accessToken:jwt.createAccessToken(userStorage)
    })
  }
})
}
module.exports = {
  register,
  login,
  refreshAccessToken
};
