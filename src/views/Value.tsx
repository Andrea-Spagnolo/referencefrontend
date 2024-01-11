import { getValuelisttemplate } from "../service/dataapi";
import { ValueList } from "../models/Valuelist";
import { useState, useEffect } from "react";
import './../styles/variables.css';
import { IonPage, IonHeader, IonContent, IonButton, IonIcon, IonModal } from "@ionic/react";
import Sidebar from "../component/Sidebar";
import { add } from 'ionicons/icons';
import ValueListBehind from "../component/valuelist/ValueListBehind";
import ValueListAdd from "../component/valuelist/ValueListAdd";

function Value() {

    const [showModal, setShowModal] = useState(false);

    const [valuelistTemplate, setValuelistTemplate] = useState([] as ValueList[]);

    useEffect(() => {
        getValuelisttemplate().then(res => {
            //console.log(res)
            setValuelistTemplate(res)
        })
    }, []);

    function addValueList(inputType: string, inputValueSet: string[]) {
        let testValueList = {
            type: inputType,
            valueSet: inputValueSet
        } as ValueList
        setValuelistTemplate(current => [...current, testValueList])
    }

    return (

        <IonPage>
            <IonHeader>
                <Sidebar />
            </IonHeader>
            <IonContent className="ion-padding" >
                <ValueListBehind valuelistbehind={valuelistTemplate} />
                <IonButton onClick={() => setShowModal(true)} id="open-modal" shape={"round"} color={'medium'}>
                    aggiungi<IonIcon icon={add} slot="start" />
                </IonButton>
                <IonModal onDidDismiss={() => setShowModal(false)} isOpen={showModal}>
                    <ValueListAdd onDismissModal={() => { setShowModal(false); }} addElement={addValueList} />
                </IonModal>
            </IonContent>
        </IonPage>

    );
}

export default Value;