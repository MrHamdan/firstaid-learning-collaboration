/* eslint-disable react-hooks/exhaustive-deps */
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut,
    getAuth,
    FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [registered, setRegistered] = useState(true)
    const auth = getAuth();

    //google sign in
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error.message);
                if (error) {
                    alert(error);
                }

            })
            .finally(() => {
                setOpen(false)
                setError('');
            });
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be at least 6 characters");

            alert(error);
            return;
        }
        registered ? processLogin(email, password) : registerNewUser(email, password);
    };

    const handleFacebookSignIn = () => {
        setIsLoading(true);
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
            .catch((error) => {
                setError("Firebase Popup Closed By User Try Again!");
            })
            .finally(() => setIsLoading(false));
    }

    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
                if (error) {
                    alert(error);
                }
            })
            .finally(() => {
                window.location.reload();
            });
    };

    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                verifyEmail();
            })
            .catch((error) => {
                setError(error.message);
                setError(error.message);
                if (error) {
                    alert(error);
                }
            })
            .finally(() => {
                window.location.reload();
            });
    };
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then((result) => {
            setError("Email Sent Please verify");
        });
    };
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                setError("Password reset link sent to email.");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // const toggleLogin = (e) => {
    //     setIsLogin(e.target.checked);
    // };
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    return {
        user,
        email,
        error,
        handleGoogleSignIn,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processLogin,
        handleResetPassword,
        registerNewUser,
        logOut,
        open,
        setOpen,
        registered,
        setRegistered,
        handleFacebookSignIn
    };
};

export default useFirebase;
