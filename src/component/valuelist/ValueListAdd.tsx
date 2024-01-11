import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from "@ionic/react";
import { useRef, useState } from "react";

interface OwnProps {
    onDismissModal: () => void;
    addElement: (inputType: string, inputValueSet: string[]) => void;
}

const ValueListAdd: React.FC<OwnProps> = ({ addElement, onDismissModal }) => {

    const [type, setType] = useState("");
    const [valueset, setValueset] = useState("");

    function Conferma() {
        addElement(type, [valueset]);
        console.log(type)
        onDismissModal();
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButton onClick={onDismissModal} shape={"round"} color={'medium'} slot="start">
                        Cancel
                    </IonButton>
                    <IonTitle>Aggiungi dati</IonTitle>
                    <IonButton onClick={Conferma} shape={"round"} color={'medium'} slot="end">
                        Conferma
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel>Value type</IonLabel>
                    <IonInput value={type} onIonInput={(e: any) => setType(e.target.value)} type="text" required />
                </IonItem>
                <IonItem>
                    <IonLabel>Value set</IonLabel>
                    <IonInput value={valueset} onIonInput={(e: any) => setValueset(e.target.value)} type="text" required />
                </IonItem>
            </IonContent>
        </>
    );
}

export default ValueListAdd;