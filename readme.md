PASSPORT
en un middleware de autenticación para node.js  y express que permite autenticarnos con terceros
a traves de usuarios y contraseñas como FB, GITHUB, LINKEDIN o GOOGLE.

Passport utiliza el concepto de estrategias (strategies) para autenticar solicitudes. 
Las estrategias pueden ir desde la verificación de las credenciales del nombre de usuario y la contraseña, 
la autenticación delegada mediante OAuth (por ejemplo, a través de Facebook o Google ) o la autenticación 
federada mediante OpenID.























/* PASO 4
import express from "express";

const app = express();

// MIDDLEWARES
app.use(express.json());

app.listen(3000, () => console.log("http://localhost:3000")); */


/* PASO 5
import { Router } from "express";

//creamos la const y ejecutamos la fc

const loginRouter = Router();
//creamos un callback que hace la solicitud
luego de que autenticamos y nos devuelve la info

loginRouter.get("/google", (req, res) => res.send("hola"));

export { loginRouter }; */

/* PASO 6
import { loginRouter } from "../routes/login.js";
 
app.use("/auth", loginRouter);  */

/*PASO 7

import passport from "passport";
app.use(passport.initialize());

/* PASO 8

import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
)); 

/* PASO 9
.ENV
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

aqui se crean las credenciales, 
https://console.cloud.google.com/apis/credentials?project=proyectoprueba-355520

URI:
http://localhost:3000/auth/google
 */

/* PASO 10
//esta funcion  EN GOOGLE.JS cuando se ejecuta devuelve  accses, refres y el profile
//validamos simulando base de datos
const emails = ["ceciaolmedo@gmail.com"];
 function(accessToken, refreshToken, profile, done) {
    // llamamos  y que incluya los datos y nos devuelve un array Y ACCEDEMOS AL indice 0
    con un valor 
    // emails.includes(profile.emails[0].value);
y un booleando por eso lo hacemos const
    const response = emails.includes(profile.emails[0].value);

      // IF EXITS IN DATABASE ESTA  AUTENTIFICADO CON DONE
      if (response) {
        done(null, profile);
      } else {
        // SAVE IN DATABASE en profile acccedemos al indice 0 y al valor Y DEVOLVEMOS PROFILE
        emails.push(profile.emails[0].value);
        done(null, profile);
      }
    }
  )
);
*/

/*Paso 11
//definimos nombre del middle y lo pasamos en index con el scope

passport.use(
  "auth-google",
  new GoogleStrategy(

Y EN INDEX
app.use(
  "/auth",
  passport.authenticate("auth-google", {
    scope : [
        //buscar el scope en https://developers.google.com/identity/protocols/oauth2/scopes
        ctrl f, profile de OAuth api y copias las url pro yemail
    ]

  }
*/

/* PASO 13
import { config } from "dotenv";
config();

 clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      ejecutamos npm run dev
      y vamos a la ruta http://localhost:3000/auth/google */