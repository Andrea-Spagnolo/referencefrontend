import { IonButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle } from "@ionic/react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const navigatetoLogin = () => {
        navigate('/Login');
    }
    return (
        <div>
            <div className="form-container sign-up-container">
                <form action="#">
                    <IonList>
                        <IonHeader>
                            <IonTitle>Create account</IonTitle>
                        </IonHeader>
                        <IonItem>
                            <IonLabel>Use your email for registration</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Insert name</IonLabel>
                            <IonInput />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Insert email</IonLabel>
                            <IonInput />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Insert password</IonLabel>
                            <IonInput />
                        </IonItem>
                    </IonList>
                    <IonButton color="medium" onClick={navigatetoLogin}>Sign Up</IonButton>
                </form>
            </div>
        </div>
    );
}

export default Register;