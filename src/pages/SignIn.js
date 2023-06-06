import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const {login} = useContext(AuthContext);

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={login}>
                <label htmlFor='username-field'>
                    Gebruikersnaam
                    <input
                        type="text"
                        name="username"
                        id="username-field"
                        placeholder="Gebruikersnaam"
                    />
                </label>
                <label htmlFor='password-field'>
                    Wachtwoord
                    <input
                        type="password"
                        name="password"
                        id="password-field"
                        placeholder="Wachtwoord"
                    />
                </label>
                <button
                    type="submit"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;