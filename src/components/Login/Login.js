import React from 'react';
import googleBtn from './btn_google_signin_dark_normal_web.png';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const redirectURL = location.state?.from || '/';

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(() => {
                setIsLoading(false);
                history.push(redirectURL);
            })
    }

    return (
        <div className="container p-3 my-3 m-auto">
            <div className="text-center">
                <p>You must login first!</p>
            </div>
            <div className="text-center">
                <button
                    onClick={handleGoogleSignin}
                    type="submit"
                    className="m-3 shadow-sm"><img src={googleBtn} alt="Continue with Google" /></button>
            </div>
        </div>
    );
};

export default Login;