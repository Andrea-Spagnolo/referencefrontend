import { IonItem, IonLabel, IonList } from "@ionic/react";
import { SectionTemplate } from "../../models/Template";

interface OwnProps {
    section: SectionTemplate

}

const SectionListRef: React.FC<OwnProps> = ({ section }) => {

    return (
        <>
            <IonItem>
                <IonLabel>{section.name}</IonLabel>
                <IonLabel>{section.type}</IonLabel>
                <IonList>

                </IonList>
            </IonItem>
        </>
    )
}

export default SectionListRef;