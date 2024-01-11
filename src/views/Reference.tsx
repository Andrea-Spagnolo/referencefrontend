import Sidebar from "../component/Sidebar";
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './../styles/variables.css';
import { useState, useEffect } from "react";
import { getReferencetemplate } from "../service/dataapi";
import TemplateComp from "../component/reference/TemplateComp";
import { ReferenceTemplate } from "../models/Template";


function Reference() {
    const [referenceTemplate, setReferenceTemplate] = useState({} as ReferenceTemplate);

    useEffect(() => {
        getReferencetemplate().then(res => {
            //console.log(res)
            setReferenceTemplate(res)
        })
    }, []);
    return (

        <IonPage>
            <IonHeader>
                <Sidebar />
            </IonHeader>
            <IonContent className="ion-padding">
                <TemplateComp template={referenceTemplate} />
            </IonContent>
        </IonPage>

    );
}

export default Reference;