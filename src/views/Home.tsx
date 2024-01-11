import { IonPage, IonHeader, IonContent } from "@ionic/react";
import Sidebar from "../component/Sidebar";
import "../styles/variables.css"


function Home() {
    return (

        <IonPage>
            <IonHeader>
                <Sidebar />
            </IonHeader>
            <IonContent className="ion-padding"></IonContent>
        </IonPage>

    )
}

export default Home;