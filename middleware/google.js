import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import passport from "passport";
import { config } from 'dotenv';

config ();
const emails = ["ceciaolmedo@gmail.com"];

passport.use(
    "auth-google",
    new GoogleStrategy( {

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google"
  },

  function(accessToken, refreshToken, profile, done) {
    const response = emails.includes(profile.emails[0].value);
    //SI EXISTE EN LA BD
    if (response) {
        done (null, profile);
    } else {
        //Guardar en la BD
        emails.push(profile.emails[0].value);
        done(null,profile);
    }
  }
));