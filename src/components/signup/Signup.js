import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import fireabaseinitialize from '../../Firebase/firebase.init';
import { useHistory, useLocation } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';


fireabaseinitialize();

const Signup = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const location = useLocation();
    const redirect_uri = location.state?.from || "/";

    const auth = getAuth();

    const handleName = (e) => {
        setname(e.target.value);

    }

    const handleEmail = e => {
        setemail(e.target.value);

    }
    const handlePassword = e => {
        setpassword(e.target.value);
    }
    const handleregister = e => {
        e.preventDefault()
        if (password.length < 6) {
            seterror('password must be 6 character')

            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            seterror('password Minimum six characters, at least one letter and one number')

            return;
        }
        register(email, password)


    }

    const register = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            const user = result.user;
            history.push(redirect_uri);

            console.log(user)
            setusername();
            window.location.reload()
            seterror("")
        }).catch((error) => {
            seterror(error.message)
        });


    }
    const setusername = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }

    return (
        <div className="in-form">

            <div className=" formfill ">
                <h5 class="text-center">Sign up Form</h5>
                <form onSubmit={handleregister}>
                    <div className="mt-4">

                        <input type="name" onBlur={handleName} className="form-control" placeholder="Full Name" id="exampleInputEmail1" aria-describedby="nameHelp" required />

                    </div>

                    <div className="mt-1">

                        <input onBlur={handleEmail} type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3 mt-1">

                        <input onBlur={handlePassword} type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" required />
                    </div>
                    <div className="text-danger">
                        {error}
                    </div>
                   <div class="d-grid gap-2 mb-4">
                   <button
                        type="submit" className="btn btn-info">CREATE ACCOUNT</button>
                   </div>
                </form>

                <p>
                    Already have an account ? <Link to="/login">login</Link>
                </p>
                <br />

            </div>

        </div>
    );
};

export default Signup;