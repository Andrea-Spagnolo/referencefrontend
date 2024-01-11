import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import '../styles/admin.css';

function Admin() {

  const navigate = useNavigate();
  const navigatetoReference = () => {
    navigate('/reference');
  }
  const navigatetoValue = () => {
    navigate('/value');
  }
  return (
    <IonPage>
      <IonHeader>
        <Sidebar />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton className="ionbutton" color="medium" onClick={navigatetoReference}>
          Reference
        </IonButton>
        <IonButton className="ionbutton" color="medium" onClick={navigatetoValue}>
          Value
        </IonButton>
      </IonContent>
    </IonPage >
  )

}
export default Admin;