import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <label htmlFor='reg-username-field'>
              Email
              <input
                  type="email"
                  name="reg-email"
                  id="reg-email-field"
                  placeholder="jouw@email.com"
              />
          </label>
          <label htmlFor='reg-username-field'>
              Gebruikersnaam
              <input
                  type="text"
                  name="reg-username"
                  id="reg-username-field"
                  placeholder="Gebruikersnaam"
              />
          </label>
          <label htmlFor='reg-password-field'>
              Wachtwoord
              <input
                  type="password"
                  name="reg-password"
                  id="reg-password-field"
                  placeholder="Wachtwoord"
              />
          </label>
          <button
              type="submit"
          >
              Registreren
          </button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;