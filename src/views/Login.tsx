import { IonButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle } from '@ionic/react';
import * as FaIcons from 'react-icons/fa'
import { Link, Outlet, useNavigate } from "react-router-dom";
import Paths from "../models/Paths";
import "./../styles/variables.css";

function Login() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');
    }

    const navigatetoRegister = () => {
        navigate('/register');
    }


    return (
        <div className="login">
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form action="#">
                        <IonList>
                            <IonHeader>
                                <IonTitle>Welcome Back!</IonTitle>
                                <IonLabel>To keep connected with us please login with your personal info</IonLabel>
                            </IonHeader>
                            <IonItem>
                                <IonLabel>Insert your email</IonLabel>
                                <IonInput className='email' />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Insert your password</IonLabel>
                                <IonInput className='password' />
                            </IonItem>
                            <IonItem>
                                <a href="#">Forgot your password?</a>
                            </IonItem>
                        </IonList>
                        <IonButton color="medium" onClick={navigateToHome}>Sign In</IonButton>
                        <IonLabel>or</IonLabel>
                        <IonButton color="medium" onClick={navigatetoRegister}>Sign up</IonButton>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default Login;