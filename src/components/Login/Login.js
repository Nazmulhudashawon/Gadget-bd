import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import '../Login/Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import fireabaseinitialize from '../../Firebase/firebase.init';


fireabaseinitialize();
const Login = () => {
    const { signingoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";


    //googlesignin
    const handlegooglelogin = () => {
        signingoogle().then(result => {
            history.push(redirect_uri);

        })
    }

    //email password login

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const auth = getAuth();



    const handleEmail = e => {
        setemail(e.target.value);

    }
    const handlePassword = e => {
        setpassword(e.target.value);
    }
    const handlelogin = e => {
        e.preventDefault()
        if (password.length < 6) {
            seterror('password must be 6 character')

            return;
        }

        loggedin(email, password);

    }
    const loggedin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                history.push(redirect_uri);

                console.log(result.user);
                seterror("")
            }).catch((error) => {
                const errorMessage = error.message;
                seterror(errorMessage);
            });


    }
    return (
        <div className="in-form">

            <div className=" formfill">
                <h5 className='text-center'>Customer Login</h5>
                <form onSubmit={handlelogin}>


                    <div className="mt-4 ">

                        <input onBlur={handleEmail} type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mt-1 mb-3">

                        <input onBlur={handlePassword} type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" required />
                    </div>
                    <div className="text-danger">
                        {error}
                    </div>

                    <div>

                    </div>
                    <div class="d-grid gap-2 mb-4">
                        <button type="submit" className="btn btn-info ">LOG IN </button>
                    </div>

                </form>


                <p>
                New member ?  <Link to="/register"> Register here</Link>
                </p>
               
                <button onClick={handlegooglelogin} className="btn btn-outline-info">SIGN IN WITH GOOGLE</button>



            </div>

        </div>
    );
};

export default Login;